package net.kdigital.web1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import lombok.extern.slf4j.Slf4j;
import net.kdigital.web1.domain.Friend;
import net.kdigital.web1.service.FriendService;

@Controller
@Slf4j
public class NextpageController {
	@Autowired
	FriendService service;
	
	@GetMapping("/nextpage")
	public String nextpage() {
		return "nextpage";
	}
	
	@PostMapping("/friendRegist")
	@ResponseBody
	public List<Friend> regist(Friend friend) {
		log.info("{}", friend.toString());
		// 저장 후
		service.insertFriend(friend);
		
		// 조회
		List<Friend> list = service.selectFriendAll();
		
		return list;
	}
	@GetMapping("/retrieveAll")
	@ResponseBody
	public List<Friend> retrieveAll(Friend friend) {
		// 조회
		List<Friend> list = service.selectFriendAll();
		return list;

	}
}
