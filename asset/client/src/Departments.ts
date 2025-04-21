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
import type { DepartmentsApi } from './DepartmentsApi';
import { NoYes } from './NoYes';
import { OmOperatingUnitType } from './OmOperatingUnitType';
import { OmInternalOrganizationType } from './OmInternalOrganizationType';
import {
  PayIntV1HcmPositionDetails,
  PayIntV1HcmPositionDetailsType
} from './PayIntV1HcmPositionDetails';
import {
  CompensationEligibilityRules,
  CompensationEligibilityRulesType
} from './CompensationEligibilityRules';
import {
  RecruitingRequestPositions,
  RecruitingRequestPositionsType
} from './RecruitingRequestPositions';
import { PositionDetails, PositionDetailsType } from './PositionDetails';
import {
  CompensationFixedIncreaseBudgets,
  CompensationFixedIncreaseBudgetsType
} from './CompensationFixedIncreaseBudgets';
import {
  RecruitingProjects,
  RecruitingProjectsType
} from './RecruitingProjects';
import {
  CompensationPayPerformanceAllocations,
  CompensationPayPerformanceAllocationsType
} from './CompensationPayPerformanceAllocations';
import {
  CaseCategoryHierarchyDetails,
  CaseCategoryHierarchyDetailsType
} from './CaseCategoryHierarchyDetails';
import { Positions, PositionsType } from './Positions';
import { Applications, ApplicationsType } from './Applications';
import { PositionsV2, PositionsV2Type } from './PositionsV2';

/**
 * This class represents the entity "Departments" of service "d365_metadata".
 */
export class Departments<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DepartmentsType<T>
{
  /**
   * Technical entity name for Departments.
   */
  static override _entityName = 'Departments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Departments entity.
   */
  static _keys = ['PartyNumber'];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Language.
   * @nullable
   */
  declare language?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Phone Purpose.
   * @nullable
   */
  declare primaryContactPhonePurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Facebook Is Private.
   * @nullable
   */
  declare primaryContactFacebookIsPrivate?: NoYes | null;
  /**
   * Primary Contact Linked In Is Private.
   * @nullable
   */
  declare primaryContactLinkedInIsPrivate?: NoYes | null;
  /**
   * Primary Contact Twitter Is Private.
   * @nullable
   */
  declare primaryContactTwitterIsPrivate?: NoYes | null;
  /**
   * Primary Contact Phone.
   * @nullable
   */
  declare primaryContactPhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address City.
   * @nullable
   */
  declare primaryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Linked In.
   * @nullable
   */
  declare primaryContactLinkedIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Url Purpose.
   * @nullable
   */
  declare primaryContactUrlPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Twitter Purpose.
   * @nullable
   */
  declare primaryContactTwitterPurpose?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Facebook Description.
   * @nullable
   */
  declare primaryContactFacebookDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Address State.
   * @nullable
   */
  declare primaryAddressState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Fax Extension.
   * @nullable
   */
  declare primaryContactFaxExtension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Email Description.
   * @nullable
   */
  declare primaryContactEmailDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Fax Description.
   * @nullable
   */
  declare primaryContactFaxDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Operating Unit Types.
   * @nullable
   */
  declare operatingUnitTypes?: OmOperatingUnitType | null;
  /**
   * Party Type.
   * @nullable
   */
  declare partyType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Email Is Im.
   * @nullable
   */
  declare primaryContactEmailIsIm?: NoYes | null;
  /**
   * Primary Address Description.
   * @nullable
   */
  declare primaryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Zip Code.
   * @nullable
   */
  declare primaryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Known As.
   * @nullable
   */
  declare knownAs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operating Unit Number.
   * @nullable
   */
  declare operatingUnitNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Email Purpose.
   * @nullable
   */
  declare primaryContactEmailPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Phone Extension.
   * @nullable
   */
  declare primaryContactPhoneExtension?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Phone Is Mobile.
   * @nullable
   */
  declare primaryContactPhoneIsMobile?: NoYes | null;
  /**
   * Primary Contact Email.
   * @nullable
   */
  declare primaryContactEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Linked In Description.
   * @nullable
   */
  declare primaryContactLinkedInDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Search Name.
   * @nullable
   */
  declare searchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Telex Purpose.
   * @nullable
   */
  declare primaryContactTelexPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Street.
   * @nullable
   */
  declare primaryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Fax.
   * @nullable
   */
  declare primaryContactFax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Country Region Iso Code.
   * @nullable
   */
  declare primaryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Address Location Roles.
   * @nullable
   */
  declare addressLocationRoles?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Memo.
   * @nullable
   */
  declare memo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address County.
   * @nullable
   */
  declare primaryAddressCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Facebook.
   * @nullable
   */
  declare primaryContactFacebook?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Fax Purpose.
   * @nullable
   */
  declare primaryContactFaxPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Valid To.
   */
  declare primaryAddressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Contact Telex.
   * @nullable
   */
  declare primaryContactTelex?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Twitter Description.
   * @nullable
   */
  declare primaryContactTwitterDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Linked In Purpose.
   * @nullable
   */
  declare primaryContactLinkedInPurpose?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Twitter.
   * @nullable
   */
  declare primaryContactTwitter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Facebook Purpose.
   * @nullable
   */
  declare primaryContactFacebookPurpose?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Url Description.
   * @nullable
   */
  declare primaryContactUrlDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Telex Description.
   * @nullable
   */
  declare primaryContactTelexDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Organization Type.
   * @nullable
   */
  declare organizationType?: OmInternalOrganizationType | null;
  /**
   * Primary Contact Phone Description.
   * @nullable
   */
  declare primaryContactPhoneDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Address Valid From.
   */
  declare primaryAddressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Contact Url.
   * @nullable
   */
  declare primaryContactUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Country Region Id.
   * @nullable
   */
  declare primaryAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-many navigation property to the {@link PayIntV1HcmPositionDetails} entity.
   */
  declare payIntPositionDetails: PayIntV1HcmPositionDetails<T>[];
  /**
   * One-to-many navigation property to the {@link CompensationEligibilityRules} entity.
   */
  declare compensationEligibilityRules: CompensationEligibilityRules<T>[];
  /**
   * One-to-many navigation property to the {@link RecruitingRequestPositions} entity.
   */
  declare recruitingRequestPositions: RecruitingRequestPositions<T>[];
  /**
   * One-to-many navigation property to the {@link PositionDetails} entity.
   */
  declare positionDetails: PositionDetails<T>[];
  /**
   * One-to-many navigation property to the {@link CompensationFixedIncreaseBudgets} entity.
   */
  declare compensationFixedIncreaseBudgets: CompensationFixedIncreaseBudgets<T>[];
  /**
   * One-to-many navigation property to the {@link RecruitingProjects} entity.
   */
  declare recruitingProjects: RecruitingProjects<T>[];
  /**
   * One-to-many navigation property to the {@link CompensationPayPerformanceAllocations} entity.
   */
  declare compensationPayPerformanceAllocations: CompensationPayPerformanceAllocations<T>[];
  /**
   * One-to-many navigation property to the {@link CaseCategoryHierarchyDetails} entity.
   */
  declare caseCategoryHierarchyDetailEntityDepartments: CaseCategoryHierarchyDetails<T>[];
  /**
   * One-to-many navigation property to the {@link Positions} entity.
   */
  declare positions: Positions<T>[];
  /**
   * One-to-many navigation property to the {@link Applications} entity.
   */
  declare applications: Applications<T>[];
  /**
   * One-to-many navigation property to the {@link PositionsV2} entity.
   */
  declare positionsV2: PositionsV2<T>[];

  constructor(_entityApi: DepartmentsApi<T>) {
    super(_entityApi);
  }
}

export interface DepartmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  language?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhonePurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFacebookIsPrivate?: NoYes | null;
  primaryContactLinkedInIsPrivate?: NoYes | null;
  primaryContactTwitterIsPrivate?: NoYes | null;
  primaryContactPhone?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactLinkedIn?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactUrlPurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactTwitterPurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFacebookDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressState?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFaxExtension?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactEmailDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFaxDescription?: DeserializedType<T, 'Edm.String'> | null;
  operatingUnitTypes?: OmOperatingUnitType | null;
  partyType?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactEmailIsIm?: NoYes | null;
  primaryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  knownAs?: DeserializedType<T, 'Edm.String'> | null;
  operatingUnitNumber?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactEmailPurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhoneExtension?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhoneIsMobile?: NoYes | null;
  primaryContactEmail?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactLinkedInDescription?: DeserializedType<T, 'Edm.String'> | null;
  searchName?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactTelexPurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFax?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  addressLocationRoles?: DeserializedType<T, 'Edm.String'> | null;
  memo?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressCounty?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFacebook?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFaxPurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactTelex?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactTwitterDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactLinkedInPurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactTwitter?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFacebookPurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactUrlDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactTelexDescription?: DeserializedType<T, 'Edm.String'> | null;
  organizationType?: OmInternalOrganizationType | null;
  primaryContactPhoneDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactUrl?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  payIntPositionDetails: PayIntV1HcmPositionDetailsType<T>[];
  compensationEligibilityRules: CompensationEligibilityRulesType<T>[];
  recruitingRequestPositions: RecruitingRequestPositionsType<T>[];
  positionDetails: PositionDetailsType<T>[];
  compensationFixedIncreaseBudgets: CompensationFixedIncreaseBudgetsType<T>[];
  recruitingProjects: RecruitingProjectsType<T>[];
  compensationPayPerformanceAllocations: CompensationPayPerformanceAllocationsType<T>[];
  caseCategoryHierarchyDetailEntityDepartments: CaseCategoryHierarchyDetailsType<T>[];
  positions: PositionsType<T>[];
  applications: ApplicationsType<T>[];
  positionsV2: PositionsV2Type<T>[];
}
