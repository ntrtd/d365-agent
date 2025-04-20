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
import type { TotalCompStatementSectionTaxesApi } from './TotalCompStatementSectionTaxesApi';
import { PayrollTaxCodeTaxGroupType } from './PayrollTaxCodeTaxGroupType';
import {
  TotalCompStatementSectionsHeader,
  TotalCompStatementSectionsHeaderType
} from './TotalCompStatementSectionsHeader';

/**
 * This class represents the entity "TotalCompStatementSectionTaxes" of service "d365_metadata".
 */
export class TotalCompStatementSectionTaxes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TotalCompStatementSectionTaxesType<T>
{
  /**
   * Technical entity name for TotalCompStatementSectionTaxes.
   */
  static override _entityName = 'TotalCompStatementSectionTaxes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TotalCompStatementSectionTaxes entity.
   */
  static _keys = [
    'StatementSectionId',
    'CountryRegionId',
    'TaxGroupId',
    'TaxCodeId'
  ];
  /**
   * Statement Section Id.
   */
  declare statementSectionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Group Id.
   */
  declare taxGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Code Id.
   */
  declare taxCodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Code Group Type.
   * @nullable
   */
  declare taxCodeGroupType?: PayrollTaxCodeTaxGroupType | null;
  /**
   * One-to-one navigation property to the {@link TotalCompStatementSectionsHeader} entity.
   */
  declare hcmTotalCompStatementSectionHeaderEntity?: TotalCompStatementSectionsHeader<T> | null;

  constructor(_entityApi: TotalCompStatementSectionTaxesApi<T>) {
    super(_entityApi);
  }
}

export interface TotalCompStatementSectionTaxesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  statementSectionId: DeserializedType<T, 'Edm.String'>;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  taxGroupId: DeserializedType<T, 'Edm.String'>;
  taxCodeId: DeserializedType<T, 'Edm.String'>;
  taxCodeGroupType?: PayrollTaxCodeTaxGroupType | null;
  hcmTotalCompStatementSectionHeaderEntity?: TotalCompStatementSectionsHeaderType<T> | null;
}
