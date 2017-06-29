DROP DATABASE IF EXISTS UtilsDB;
CREATE DATABASE UtilsDB;
USE UtilsDB;

DROP TABLE IF EXISTS ACUnits;

CREATE TABLE ACUnits (
	EntryID				VARCHAR(12)		PRIMARY KEY NOT NULL UNIQUE, #MM-DD-YYYY_S
    #4
	AC4Off				CHAR(3),
	AC4Temp				VARCHAR(3),
    AC4Hum				VARCHAR(3),
    AC4DX				VARCHAR(3),
    AC4Econ				VARCHAR(3),
    #01
	AC01Off				CHAR(3),
	AC01Temp			VARCHAR(3),
    AC01Hum				VARCHAR(3),
    AC01DX				VARCHAR(3),
    AC01Econ			VARCHAR(3),
	#17
	AC17Off				CHAR(3),
    AC17Temp			VARCHAR(3),
    AC17Hum				VARCHAR(3),
    AC17DX				VARCHAR(3),
    AC17Econ			VARCHAR(3),
	#16
	AC16Off				CHAR(3),
    AC16Temp				VARCHAR(3),
    AC16Hum				VARCHAR(3),
    AC16DX				VARCHAR(3),
    AC16Econ				VARCHAR(3),
    #1
	AC1Off				CHAR(3),
	AC1Temp				VARCHAR(3),
    AC1Hum				VARCHAR(3),
    AC1DX				VARCHAR(3),
    AC1Econ				VARCHAR(3),
    #6
	AC6Off				CHAR(3),
	AC6Temp				VARCHAR(3),
    AC6Hum				VARCHAR(3),
    AC6DX				VARCHAR(3),
    AC6Econ				VARCHAR(3),
    #1A
	AC1AOff				CHAR(3),
	AC1ATemp				VARCHAR(3),
    AC1AHum				VARCHAR(3),
    AC1ADX				VARCHAR(3),
    AC1AEcon				VARCHAR(3),
    #11
	AC11Off				CHAR(3),
	AC11Temp				VARCHAR(3),
    AC11Hum				VARCHAR(3),
    AC11DX				VARCHAR(3),
    AC11Econ				VARCHAR(3),
    #10
	AC10Off				CHAR(3),
	AC10Temp				VARCHAR(3),
    AC10Hum				VARCHAR(3),
    AC10DX				VARCHAR(3),
    AC10Econ				VARCHAR(3),
    #2
	AC2Off				CHAR(3),
	AC2Temp				VARCHAR(3),
    AC2Hum				VARCHAR(3),
    AC2DX				VARCHAR(3),
    AC2Econ				VARCHAR(3),
    #3
	AC3Off				CHAR(3),
	AC3Temp				VARCHAR(3),
    AC3Hum				VARCHAR(3),
    AC3DX				VARCHAR(3),
    AC3Econ				VARCHAR(3),
    #13
	AC13Off				CHAR(3),
	AC13Temp				VARCHAR(3),
    AC13Hum				VARCHAR(3),
    AC13DX				VARCHAR(3),
    AC13Econ				VARCHAR(3),
    #15
	AC15Off				CHAR(3),
	AC15Temp				VARCHAR(3),
    AC15Hum				VARCHAR(3),
    AC15DX				VARCHAR(3),
    AC15Econ				VARCHAR(3),
    #7
	AC7Off				CHAR(3),
	AC7Temp				VARCHAR(3),
    AC7Hum				VARCHAR(3),
    AC7DX				VARCHAR(3),
    AC7Econ				VARCHAR(3),
    #12
	AC12Off				CHAR(3),
	AC12Temp				VARCHAR(3),
    AC12Hum				VARCHAR(3),
    AC12DX				VARCHAR(3),
    AC12Econ				VARCHAR(3)
);

SELECT * FROM ACUnits;

INSERT INTO ACUnits VALUES ('06-23-2017_1');