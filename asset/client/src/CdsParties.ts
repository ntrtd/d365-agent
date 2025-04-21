/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { CdsPartiesApi } from './CdsPartiesApi';
import { MonthsOfYear } from './MonthsOfYear';
import { Abc } from './Abc';
import { Gender } from './Gender';
import { DirPersonMaritalStatus } from './DirPersonMaritalStatus';
import { Prospects, ProspectsType } from './Prospects';
import { People, PeopleType } from './People';
import {
  CustomerHierarchyNodes,
  CustomerHierarchyNodesType
} from './CustomerHierarchyNodes';
import { PartyContactsV3, PartyContactsV3Type } from './PartyContactsV3';
import {
  CdsContactPersonsV2,
  CdsContactPersonsV2Type
} from './CdsContactPersonsV2';
import { PartyContactsV2, PartyContactsV2Type } from './PartyContactsV2';
import {
  CdsPartyPostalAddressLocations,
  CdsPartyPostalAddressLocationsType
} from './CdsPartyPostalAddressLocations';
import {
  CustomerHiearchies,
  CustomerHiearchiesType
} from './CustomerHiearchies';

/**
 * This class represents the entity "CDSParties" of service "d365_metadata".
 */
export class CdsParties<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CdsPartiesType<T>
{
  /**
   * Technical entity name for CdsParties.
   */
  static override _entityName = 'CDSParties';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CdsParties entity.
   */
  static _keys = ['PartyNumber'];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Books.
   * @nullable
   */
  declare addressBooks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Anniversary Day.
   */
  declare personAnniversaryDay: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Organization Name.
   * @nullable
   */
  declare organizationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Initials.
   * @nullable
   */
  declare personInitials?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Phonetic First Name.
   * @nullable
   */
  declare personPhoneticFirstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Personal Title.
   * @nullable
   */
  declare personPersonalTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Children Names.
   * @nullable
   */
  declare personChildrenNames?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Anniversary Month.
   * @nullable
   */
  declare personAnniversaryMonth?: MonthsOfYear | null;
  /**
   * Person Birth Day.
   */
  declare personBirthDay: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Person Hobbies.
   * @nullable
   */
  declare personHobbies?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Last Name.
   * @nullable
   */
  declare personLastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Phonetic Middle Name.
   * @nullable
   */
  declare personPhoneticMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Professional Suffix.
   * @nullable
   */
  declare personProfessionalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Birth Month.
   * @nullable
   */
  declare personBirthMonth?: MonthsOfYear | null;
  /**
   * Name Alias.
   * @nullable
   */
  declare nameAlias?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party Type.
   * @nullable
   */
  declare partyType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Abc Code.
   * @nullable
   */
  declare organizationAbcCode?: Abc | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Known As.
   * @nullable
   */
  declare knownAs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Anniversary Year.
   */
  declare personAnniversaryYear: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Organization Phonetic Name.
   * @nullable
   */
  declare organizationPhoneticName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Number.
   * @nullable
   */
  declare organizationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person First Name.
   * @nullable
   */
  declare personFirstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Middle Name.
   * @nullable
   */
  declare personMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Personal Suffix.
   * @nullable
   */
  declare personPersonalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Last Name Prefix.
   * @nullable
   */
  declare personLastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Gender.
   * @nullable
   */
  declare personGender?: Gender | null;
  /**
   * Organization Num Of Employees.
   */
  declare organizationNumOfEmployees: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Person Marital Status.
   * @nullable
   */
  declare personMaritalStatus?: DirPersonMaritalStatus | null;
  /**
   * Person Birth Year.
   */
  declare personBirthYear: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Person Phonetic Last Name.
   * @nullable
   */
  declare personPhoneticLastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Professional Title.
   * @nullable
   */
  declare personProfessionalTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Prospects} entity.
   */
  declare customer?: Prospects<T> | null;
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare person?: People<T> | null;
  /**
   * One-to-many navigation property to the {@link CustomerHierarchyNodes} entity.
   */
  declare customerHierarchyNode: CustomerHierarchyNodes<T>[];
  /**
   * One-to-many navigation property to the {@link PartyContactsV3} entity.
   */
  declare partyContactV3: PartyContactsV3<T>[];
  /**
   * One-to-one navigation property to the {@link CdsContactPersonsV2} entity.
   */
  declare contactPerson?: CdsContactPersonsV2<T> | null;
  /**
   * One-to-many navigation property to the {@link PartyContactsV2} entity.
   */
  declare partyContactV2: PartyContactsV2<T>[];
  /**
   * One-to-many navigation property to the {@link CdsPartyPostalAddressLocations} entity.
   */
  declare cdsPartyPostalAddressLocation: CdsPartyPostalAddressLocations<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerHiearchies} entity.
   */
  declare customerHierarchy: CustomerHiearchies<T>[];

  constructor(_entityApi: CdsPartiesApi<T>) {
    super(_entityApi);
  }
}

export interface CdsPartiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  addressBooks?: DeserializedType<T, 'Edm.String'> | null;
  personAnniversaryDay: DeserializedType<T, 'Edm.Int32'>;
  organizationName?: DeserializedType<T, 'Edm.String'> | null;
  personInitials?: DeserializedType<T, 'Edm.String'> | null;
  personPhoneticFirstName?: DeserializedType<T, 'Edm.String'> | null;
  personPersonalTitle?: DeserializedType<T, 'Edm.String'> | null;
  personChildrenNames?: DeserializedType<T, 'Edm.String'> | null;
  personAnniversaryMonth?: MonthsOfYear | null;
  personBirthDay: DeserializedType<T, 'Edm.Int32'>;
  personHobbies?: DeserializedType<T, 'Edm.String'> | null;
  personLastName?: DeserializedType<T, 'Edm.String'> | null;
  personPhoneticMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  personProfessionalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  personBirthMonth?: MonthsOfYear | null;
  nameAlias?: DeserializedType<T, 'Edm.String'> | null;
  partyType?: DeserializedType<T, 'Edm.String'> | null;
  organizationAbcCode?: Abc | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  knownAs?: DeserializedType<T, 'Edm.String'> | null;
  personAnniversaryYear: DeserializedType<T, 'Edm.Int32'>;
  organizationPhoneticName?: DeserializedType<T, 'Edm.String'> | null;
  organizationNumber?: DeserializedType<T, 'Edm.String'> | null;
  personFirstName?: DeserializedType<T, 'Edm.String'> | null;
  personMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  personPersonalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  personLastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  personGender?: Gender | null;
  organizationNumOfEmployees: DeserializedType<T, 'Edm.Int32'>;
  personMaritalStatus?: DirPersonMaritalStatus | null;
  personBirthYear: DeserializedType<T, 'Edm.Int32'>;
  personPhoneticLastName?: DeserializedType<T, 'Edm.String'> | null;
  personProfessionalTitle?: DeserializedType<T, 'Edm.String'> | null;
  customer?: ProspectsType<T> | null;
  person?: PeopleType<T> | null;
  customerHierarchyNode: CustomerHierarchyNodesType<T>[];
  partyContactV3: PartyContactsV3Type<T>[];
  contactPerson?: CdsContactPersonsV2Type<T> | null;
  partyContactV2: PartyContactsV2Type<T>[];
  cdsPartyPostalAddressLocation: CdsPartyPostalAddressLocationsType<T>[];
  customerHierarchy: CustomerHiearchiesType<T>[];
}
