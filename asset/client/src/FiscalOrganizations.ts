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
import type { FiscalOrganizationsApi } from './FiscalOrganizationsApi';
import { FbContribAssessmentContributionTypeBr } from './FbContribAssessmentContributionTypeBr';
import { FbContribLegalEntityTypeBr } from './FbContribLegalEntityTypeBr';
import { FbContribActivityTypeBr } from './FbContribActivityTypeBr';
import { FbCompanyLinkToUnionBr } from './FbCompanyLinkToUnionBr';
import { FbCompanyTypeBr } from './FbCompanyTypeBr';
import { FbContribAssessmentCriteriaBr } from './FbContribAssessmentCriteriaBr';
import { FbscpTypeBr } from './FbscpTypeBr';
import { FbContribVersionBr } from './FbContribVersionBr';
import { FbContribCreditAllocationMethodBr } from './FbContribCreditAllocationMethodBr';
import { FbContribAssessmentRegimenBr } from './FbContribAssessmentRegimenBr';
import { NoYes } from './NoYes';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "FiscalOrganizations" of service "d365_metadata".
 */
export class FiscalOrganizations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FiscalOrganizationsType<T>
{
  /**
   * Technical entity name for FiscalOrganizations.
   */
  static override _entityName = 'FiscalOrganizations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalOrganizations entity.
   */
  static _keys = ['RootFiscalEstablishmentDataArea', 'RootFiscalEstablishment'];
  /**
   * Root Fiscal Establishment Data Area.
   */
  declare rootFiscalEstablishmentDataArea: DeserializedType<T, 'Edm.String'>;
  /**
   * Root Fiscal Establishment.
   */
  declare rootFiscalEstablishment: DeserializedType<T, 'Edm.String'>;
  /**
   * Type Of Assessment Contribution.
   * @nullable
   */
  declare typeOfAssessmentContribution?: FbContribAssessmentContributionTypeBr | null;
  /**
   * Sales Tax Pis Expense Display Value.
   * @nullable
   */
  declare salesTaxPisExpenseDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Legal Entity Type.
   * @nullable
   */
  declare legalEntityType?: FbContribLegalEntityTypeBr | null;
  /**
   * Type Of Activity.
   * @nullable
   */
  declare typeOfActivity?: FbContribActivityTypeBr | null;
  /**
   * Company Link To Union.
   * @nullable
   */
  declare companyLinkToUnion?: FbCompanyLinkToUnionBr | null;
  /**
   * Company Type.
   * @nullable
   */
  declare companyType?: FbCompanyTypeBr | null;
  /**
   * Booking And Assessment Criteria.
   * @nullable
   */
  declare bookingAndAssessmentCriteria?: FbContribAssessmentCriteriaBr | null;
  /**
   * Scp Participation.
   * @nullable
   */
  declare scpParticipation?: FbscpTypeBr | null;
  /**
   * Constitution Archive Date.
   */
  declare constitutionArchiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Scp Code.
   * @nullable
   */
  declare scpCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Nature.
   * @nullable
   */
  declare legalNature?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Layout Version.
   * @nullable
   */
  declare layoutVersion?: FbContribVersionBr | null;
  /**
   * Sales Tax Cofins Expense Display Value.
   * @nullable
   */
  declare salesTaxCofinsExpenseDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Conversion Archive Date.
   */
  declare conversionArchiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Credit Allocation Method.
   * @nullable
   */
  declare creditAllocationMethod?: FbContribCreditAllocationMethodBr | null;
  /**
   * Assessment Regimen.
   * @nullable
   */
  declare assessmentRegimen?: FbContribAssessmentRegimenBr | null;
  /**
   * Large Company.
   * @nullable
   */
  declare largeCompany?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: FiscalOrganizationsApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalOrganizationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  rootFiscalEstablishmentDataArea: DeserializedType<T, 'Edm.String'>;
  rootFiscalEstablishment: DeserializedType<T, 'Edm.String'>;
  typeOfAssessmentContribution?: FbContribAssessmentContributionTypeBr | null;
  salesTaxPisExpenseDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  legalEntityType?: FbContribLegalEntityTypeBr | null;
  typeOfActivity?: FbContribActivityTypeBr | null;
  companyLinkToUnion?: FbCompanyLinkToUnionBr | null;
  companyType?: FbCompanyTypeBr | null;
  bookingAndAssessmentCriteria?: FbContribAssessmentCriteriaBr | null;
  scpParticipation?: FbscpTypeBr | null;
  constitutionArchiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  scpCode?: DeserializedType<T, 'Edm.String'> | null;
  legalNature?: DeserializedType<T, 'Edm.String'> | null;
  layoutVersion?: FbContribVersionBr | null;
  salesTaxCofinsExpenseDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  conversionArchiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  creditAllocationMethod?: FbContribCreditAllocationMethodBr | null;
  assessmentRegimen?: FbContribAssessmentRegimenBr | null;
  largeCompany?: NoYes | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
