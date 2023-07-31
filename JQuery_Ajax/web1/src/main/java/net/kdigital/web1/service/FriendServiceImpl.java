package net.kdigital.web1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.kdigital.web1.domain.Friend;
import net.kdigital.web1.mapper.FriendMapper;

@Service
public class FriendServiceImpl implements FriendService {
	@Autowired
	FriendMapper mapper;
	
	@Override
	public int insertFriend(Friend friend) {
		return mapper.insertFriend(friend);
	}

	@Override
	public Friend selectFriend(int seq) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Friend> selectFriendAll() {
		return mapper.selectFriendAll();
	}

	@Override
	public int deleteFriend(int seq) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateFriend(Friend friend) {
		// TODO Auto-generated method stub
		return 0;
	}

}
