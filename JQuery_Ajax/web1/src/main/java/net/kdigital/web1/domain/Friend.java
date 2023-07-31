package net.kdigital.web1.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Friend {
	private int seq;
	private String name;
	private String phone;
	private String address;
}
