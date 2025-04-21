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
import type { CdsContactPersonsV2Api } from './CdsContactPersonsV2Api';
import { SmmContactPersonCdsAssociatedContactType } from './SmmContactPersonCdsAssociatedContactType';
import { Gender } from './Gender';
import { NoYes } from './NoYes';
import { DirPersonMaritalStatus } from './DirPersonMaritalStatus';
import { MonthsOfYear } from './MonthsOfYear';
import { CdsParties, CdsPartiesType } from './CdsParties';

/**
 * This class represents the entity "CDSContactPersonsV2" of service "d365_metadata".
 */
export class CdsContactPersonsV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CdsContactPersonsV2Type<T>
{
  /**
   * Technical entity name for CdsContactPersonsV2.
   */
  static override _entityName = 'CDSContactPersonsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CdsContactPersonsV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'ContactPersonPartyNumber',
    'AssociatedContactType',
    'AssociatedContactNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Contact Person Party Number.
   */
  declare contactPersonPartyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Associated Contact Type.
   * @nullable
   */
  declare associatedContactType?: SmmContactPersonCdsAssociatedContactType | null;
  /**
   * Associated Contact Number.
   */
  declare associatedContactNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Primary Url.
   * @nullable
   */
  declare primaryUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Description.
   * @nullable
   */
  declare primaryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gender.
   * @nullable
   */
  declare gender?: Gender | null;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Birth Year.
   */
  declare birthYear: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Primary Fax Number.
   * @nullable
   */
  declare primaryFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Country Region Id.
   * @nullable
   */
  declare primaryAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Address Street.
   * @nullable
   */
  declare primaryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address City.
   * @nullable
   */
  declare primaryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Government Identification Number.
   * @nullable
   */
  declare governmentIdentificationNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Last Name.
   * @nullable
   */
  declare lastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Twitter.
   * @nullable
   */
  declare primaryTwitter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address State Id.
   * @nullable
   */
  declare primaryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Spouse Name.
   * @nullable
   */
  declare spouseName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Linked In.
   * @nullable
   */
  declare primaryLinkedIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Contact Person Externally Maintained.
   * @nullable
   */
  declare isContactPersonExternallyMaintained?: NoYes | null;
  /**
   * Is Receiving Direct Mail.
   * @nullable
   */
  declare isReceivingDirectMail?: NoYes | null;
  /**
   * Primary Address Zip Code.
   * @nullable
   */
  declare primaryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employment Profession.
   * @nullable
   */
  declare employmentProfession?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employment Department.
   * @nullable
   */
  declare employmentDepartment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Phone Number.
   * @nullable
   */
  declare primaryPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Party Type.
   * @nullable
   */
  declare contactPersonPartyType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Marital Status.
   * @nullable
   */
  declare maritalStatus?: DirPersonMaritalStatus | null;
  /**
   * Primary Address Location Roles.
   * @nullable
   */
  declare primaryAddressLocationRoles?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Birth Day.
   */
  declare birthDay: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Birth Month.
   * @nullable
   */
  declare birthMonth?: MonthsOfYear | null;
  /**
   * Primary Email Address.
   * @nullable
   */
  declare primaryEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Facebook.
   * @nullable
   */
  declare primaryFacebook?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Street Number.
   * @nullable
   */
  declare primaryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Inactive.
   * @nullable
   */
  declare isInactive?: NoYes | null;
  /**
   * Decision Making Role Code.
   * @nullable
   */
  declare decisionMakingRoleCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Middle Name.
   * @nullable
   */
  declare middleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address County Id.
   * @nullable
   */
  declare primaryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Responsible Personnel Number.
   * @nullable
   */
  declare contactPersonResponsiblePersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * First Name.
   * @nullable
   */
  declare firstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Country Region Iso Code.
   * @nullable
   */
  declare primaryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link CdsParties} entity.
   */
  declare party?: CdsParties<T> | null;

  constructor(_entityApi: CdsContactPersonsV2Api<T>) {
    super(_entityApi);
  }
}

export interface CdsContactPersonsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  contactPersonPartyNumber: DeserializedType<T, 'Edm.String'>;
  associatedContactType?: SmmContactPersonCdsAssociatedContactType | null;
  associatedContactNumber: DeserializedType<T, 'Edm.String'>;
  primaryUrl?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  gender?: Gender | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  birthYear: DeserializedType<T, 'Edm.Int32'>;
  primaryFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  governmentIdentificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  primaryTwitter?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  spouseName?: DeserializedType<T, 'Edm.String'> | null;
  primaryLinkedIn?: DeserializedType<T, 'Edm.String'> | null;
  isContactPersonExternallyMaintained?: NoYes | null;
  isReceivingDirectMail?: NoYes | null;
  primaryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  employmentProfession?: DeserializedType<T, 'Edm.String'> | null;
  employmentDepartment?: DeserializedType<T, 'Edm.String'> | null;
  primaryPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonPartyType?: DeserializedType<T, 'Edm.String'> | null;
  maritalStatus?: DirPersonMaritalStatus | null;
  primaryAddressLocationRoles?: DeserializedType<T, 'Edm.String'> | null;
  birthDay: DeserializedType<T, 'Edm.Int32'>;
  birthMonth?: MonthsOfYear | null;
  primaryEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  primaryFacebook?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  isInactive?: NoYes | null;
  decisionMakingRoleCode?: DeserializedType<T, 'Edm.String'> | null;
  middleName?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonResponsiblePersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  party?: CdsPartiesType<T> | null;
}
