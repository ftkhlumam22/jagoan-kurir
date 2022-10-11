import {
  View,
  Text,
  Box,
  Heading,
  Image,
  Button,
  ScrollView,
  Actionsheet,
  useDisclose,
  Input,
  KeyboardAvoidingView,
  Pressable,
  Select,
  CheckIcon,
} from "native-base";
import React, { useState } from "react";
import { Platform } from "react-native";
import Colors from "../data/color";

function Homepage() {
  const { isOpen, onOpen, onClose } = useDisclose();
  const [validated, setValidated] = useState(true);

  let validation = (valid) => {
    setValidated(valid);
    onOpen();
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Box flex="1" bg={Colors.white} m="20px" mt="10px">
        <Box pt="30px" width="180px">
          <Heading fontSize="20px" fontWeight="semibold">
            Hai, Mau Kirim Apa Hari Ini ?
          </Heading>
        </Box>
        <Image
          mt="-2"
          source={require("../../assets/home_ilustration.png")}
          width="full"
          alt="ilustration"
        />
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          my="20px">
          <Button
            size="md"
            mr="10px"
            width="163px"
            height="56px"
            bg={Colors.main}
            borderRadius="10px"
            shadow="9"
            onPress={() => validation(true)}
            _pressed={{ bg: "blue.700" }}>
            <Image
              source={require("../../assets/resi_button.png")}
              position="absolute"
              alt="img"
              mt="-17px"
              ml="36px"
            />
            <Box display="flex" flexDirection="row" alignItems="center">
              <Image
                source={require("../../assets/resi.png")}
                size="18px"
                alt="img"
              />
              <Text mx="5px" color={Colors.white} fontWeight="semibold">
                Cek Resi
              </Text>
            </Box>
          </Button>
          <Button
            size="md"
            ml="10px"
            width="163px"
            height="56px"
            bg={Colors.main}
            borderRadius="10px"
            shadow="9"
            onPress={() => validation(false)}
            _pressed={{ bg: "blue.700" }}>
            <Image
              source={require("../../assets/ongkir_button.png")}
              position="absolute"
              alt="img"
              mt="-17px"
              ml="51px"
            />
            <Box display="flex" flexDirection="row" alignItems="center">
              <Image
                source={require("../../assets/ongkir.png")}
                size="18px"
                alt="img"
              />
              <Text mx="5px" color={Colors.white} fontWeight="semibold">
                Cek Ongkir
              </Text>
            </Box>
          </Button>
        </Box>
        <Heading fontWeight="semibold" fontSize="18px">
          Butuh banget dikirim hari ini
        </Heading>
        <Text color={Colors.shadow} fontSize="11px">
          Dengan layanan Sameday, paketmu pasti cepat sampai
        </Text>
        {/* Sameday */}
        <Box
          bg={{
            linearGradient: {
              colors: [Colors.main, Colors.secondary],
              start: [1, 1],
              end: [-1, -1],
            },
          }}
          width="full"
          height="141px"
          mt="13px"
          borderRadius="20px">
          <Pressable
            _pressed={{ bg: "blue.700" }}
            width="full"
            height="141px"
            borderRadius="20px">
            <Box
              display="flex"
              flexDirection="column"
              m="20px"
              justifyContent="flex-start"
              height="90px">
              <Image
                source={require("../../assets/line.png")}
                mb="5px"
                ml="60px"
              />
              <Heading color="white" fontSize="21px">
                Sameday Service
              </Heading>
              <Text width="200px" color="white" fontSize="10px" mt="2px">
                Pengiriman paket dihari yang sama
              </Text>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                mt="5px">
                <Box
                  bg={Colors.red}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  px="7px"
                  py="4px"
                  borderRadius="10px"
                  mr="4px">
                  <Heading color="white" fontSize="18px">
                    <Text fontSize="11px">Rp</Text> 6.500
                  </Heading>
                  <Text fontSize="10px" color="white">
                    Via Web/App
                  </Text>
                </Box>
                <Box
                  bg={Colors.red}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  px="7px"
                  py="4px"
                  borderRadius="10px"
                  ml="4px">
                  <Heading color="white" fontSize="18px">
                    <Text fontSize="11px">Rp</Text> 7.500
                  </Heading>
                  <Text fontSize="10px" color="white">
                    Via Whatsapp
                  </Text>
                </Box>
              </Box>
            </Box>
            <Image
              source={require("../../assets/sameday.png")}
              position="absolute"
              ml="220px"
              mt="10px"
            />
          </Pressable>
        </Box>
        {/* Next day */}
        <Heading fontWeight="semibold" fontSize="18px" mt="20px">
          Paket yang penting sampai
        </Heading>
        <Text color={Colors.shadow} fontSize="11px">
          Dengan layanan Nextday, paketmu dijamin sampai tujuan
        </Text>
        <Box
          bg={{
            linearGradient: {
              colors: [Colors.main, Colors.secondary],
              start: [1, 1],
              end: [-1, -1],
            },
          }}
          width="full"
          height="141px"
          mt="13px"
          borderRadius="20px">
          <Pressable
            _pressed={{ bg: "blue.700" }}
            width="full"
            height="141px"
            borderRadius="20px">
            <Box
              display="flex"
              flexDirection="column"
              m="20px"
              justifyContent="flex-start"
              height="90px">
              <Image
                source={require("../../assets/line.png")}
                mb="5px"
                ml="60px"
              />
              <Heading color="white" fontSize="21px">
                Nextday Service
              </Heading>
              <Text width="200px" color="white" fontSize="10px" mt="2px">
                Estimasi pengiriman hingga 2 hari
              </Text>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                mt="5px">
                <Box
                  bg={Colors.red}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  px="7px"
                  py="4px"
                  borderRadius="10px"
                  mr="4px"
                  height="39px">
                  <Heading color="white" fontSize="18px">
                    <Text fontSize="11px">Rp</Text> 5.000
                  </Heading>
                </Box>
              </Box>
            </Box>
            <Image
              source={require("../../assets/nextday.png")}
              position="absolute"
              ml="220px"
              mt="10px"
            />
          </Pressable>
        </Box>
        {/* Nextdoor Service */}
        <Heading fontWeight="semibold" fontSize="18px" mt="20px">
          Butuh dikirim cepat
        </Heading>
        <Text color={Colors.shadow} fontSize="11px">
          Dengan layanan Nextdoor, paketmu sampai dalam 2 jam
        </Text>
        <Box
          bg={{
            linearGradient: {
              colors: [Colors.main, Colors.secondary],
              start: [1, 1],
              end: [-1, -1],
            },
          }}
          width="full"
          height="141px"
          mt="13px"
          borderRadius="20px">
          <Pressable
            _pressed={{ bg: "blue.700" }}
            width="full"
            height="141px"
            borderRadius="20px">
            <Box
              display="flex"
              flexDirection="column"
              m="20px"
              justifyContent="flex-start"
              height="90px">
              <Image
                source={require("../../assets/line.png")}
                mb="5px"
                ml="60px"
              />
              <Heading color="white" fontSize="21px">
                Nextdoor Service
              </Heading>
              <Text width="200px" color="white" fontSize="10px" mt="2px">
                Pengiriman paket 2kg durasi 2 jam
              </Text>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                mt="5px">
                <Box
                  bg={Colors.red}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  px="7px"
                  py="4px"
                  borderRadius="10px"
                  mr="4px"
                  height="39px">
                  <Heading color="white" fontSize="18px">
                    <Text fontSize="11px">Rp</Text> 5.000
                  </Heading>
                </Box>
              </Box>
            </Box>
            <Image
              source={require("../../assets/nextdoor.png")}
              position="absolute"
              ml="210px"
              mt="5px"
            />
          </Pressable>
        </Box>
      </Box>
      {validated ? (
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "height" : "padding"}
            w="full">
            <Actionsheet.Content>
              <Box w="full" h="500px" px="10px" py={3} alignItems="center">
                <Image source={require("../../assets/cek_resi.png")} />
                <Heading fontSize="20px" my={5}>
                  Paketmu aman, cek posisinya
                </Heading>
                <Box
                  height="auto"
                  width="full"
                  bg={Colors.main}
                  borderRadius="10px">
                  <Box
                    display="flex"
                    flexDirection="row-reverse"
                    width="full"
                    mr="-5px">
                    <Image
                      source={require("../../assets/cek_resi_bg.png")}
                      position="absolute"
                    />
                  </Box>
                  <Box m={6}>
                    <Box display="flex" flexDirection="row" alignItems="center">
                      <Image
                        source={require("../../assets/resi.png")}
                        size="19px"
                        alt="img"
                      />
                      <Text
                        mx="5px"
                        color={Colors.white}
                        fontWeight="semibold"
                        fontSize="13px">
                        Cek Resi
                      </Text>
                    </Box>
                    <Text my={3} fontSize="10px" color="white">
                      Masukkan no. resi
                    </Text>
                    <Box>
                      <Input
                        variant="rounded"
                        px="35px"
                        py="2px"
                        bg="white"
                        placeholder="JK0000291"
                        _focus={{ bg: "white" }}
                      />
                      <Image
                        source={require("../../assets/search_icon.png")}
                        position="absolute"
                        mt="8px"
                        ml="12px"
                      />
                    </Box>
                    <Button
                      size="xs"
                      mt={4}
                      borderRadius="15px"
                      bg={Colors.button}>
                      <Text fontSize="14px" color="white" fontWeight="semibold">
                        Cek Resi
                      </Text>
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Actionsheet.Content>
          </KeyboardAvoidingView>
        </Actionsheet>
      ) : (
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Box mb={4}>
                <Image source={require("../../assets/cek_ongkir.png")} />
                <Heading fontSize="20px" my={5}>
                  Cek ongkosnya sebelum kirim
                </Heading>
                <Box height="auto" width="full" borderRadius="10px" shadow="5">
                  <Box bg={Colors.main} borderTopRadius="10px">
                    <Box
                      display="flex"
                      flexDirection="row-reverse"
                      width="full"
                      mr="-5px">
                      <Image
                        source={require("../../assets/cek_resi_bg.png")}
                        position="absolute"
                      />
                    </Box>
                    <Box m={6}>
                      <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center">
                        <Image
                          source={require("../../assets/ongkir.png")}
                          size="19px"
                          alt="img"
                        />
                        <Text
                          mx="5px"
                          color={Colors.white}
                          fontWeight="semibold"
                          fontSize="13px">
                          Cek Ongkir
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                  <Box bg="white" borderBottomRadius="10px">
                    <Box m={6}>
                      <Text fontWeight="semibold" color={Colors.shadow}>
                        Asal Daerah
                      </Text>
                      <Select
                        accessibilityLabel="Asal Daerah"
                        width="full"
                        borderRadius="10px"
                        placeholder="Asal Daerah"
                        _selectedItem={{
                          endIcon: <CheckIcon size="5" />,
                        }}
                        mt={1}>
                        <Select.Item label="Cirebon" value="cirebon" />
                        <Select.Item label="Indramayu" value="indramayu" />
                      </Select>
                      <Text
                        fontWeight="semibold"
                        color={Colors.shadow}
                        mt="15px">
                        Tujuan Daerah
                      </Text>
                      <Select
                        accessibilityLabel="Tujuan Daerah"
                        width="full"
                        borderRadius="10px"
                        placeholder="Tujuan Daerah"
                        _selectedItem={{
                          endIcon: <CheckIcon size="5" />,
                        }}
                        mt={1}>
                        <Select.Item label="Cirebon" value="cirebon" />
                        <Select.Item label="Indramayu" value="indramayu" />
                      </Select>
                      <Text
                        fontWeight="semibold"
                        color={Colors.shadow}
                        mt="15px">
                        Berat (Kg)
                      </Text>
                      <Input
                        variant="outline"
                        borderRadius="10px"
                        height="40px"
                        px="10px"
                        py="2px"
                        bg="white"
                        placeholder="Contoh : 1"
                        _focus={{ bg: "white" }}
                      />
                      <Button
                        size="xs"
                        mt={4}
                        borderRadius="15px"
                        mb={2}
                        bg={Colors.button}>
                        <Text
                          fontSize="14px"
                          color="white"
                          fontWeight="semibold">
                          Cek Ongkir
                        </Text>
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </ScrollView>
          </Actionsheet.Content>
        </Actionsheet>
      )}
    </ScrollView>
  );
}

export default Homepage;
