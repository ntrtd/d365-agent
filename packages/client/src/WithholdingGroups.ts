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
import type { WithholdingGroupsApi } from './WithholdingGroupsApi';
import { NoYes } from './NoYes';
import { TaxWithholdCodeTypeIn } from './TaxWithholdCodeTypeIn';
import { TaxWithholdTaxApplicabilityIn } from './TaxWithholdTaxApplicabilityIn';
import {
  WithholdingGroupDatas,
  WithholdingGroupDatasType
} from './WithholdingGroupDatas';

/**
 * This class represents the entity "WithholdingGroups" of service "d365_metadata".
 */
export class WithholdingGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WithholdingGroupsType<T>
{
  /**
   * Technical entity name for WithholdingGroups.
   */
  static override _entityName = 'WithholdingGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WithholdingGroups entity.
   */
  static _keys = ['dataAreaId', 'WithholdingTaxGroupCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Withholding Tax Group Code.
   */
  declare withholdingTaxGroupCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Exclude Charges.
   * @nullable
   */
  declare excludeCharges?: NoYes | null;
  /**
   * Tax Type.
   * @nullable
   */
  declare taxType?: TaxWithholdCodeTypeIn | null;
  /**
   * Applicable Tax Rates.
   * @nullable
   */
  declare applicableTaxRates?: TaxWithholdTaxApplicabilityIn | null;
  /**
   * Transporter.
   * @nullable
   */
  declare transporter?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link WithholdingGroupDatas} entity.
   */
  declare withholdingGroupData: WithholdingGroupDatas<T>[];

  constructor(_entityApi: WithholdingGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface WithholdingGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  withholdingTaxGroupCode: DeserializedType<T, 'Edm.String'>;
  excludeCharges?: NoYes | null;
  taxType?: TaxWithholdCodeTypeIn | null;
  applicableTaxRates?: TaxWithholdTaxApplicabilityIn | null;
  transporter?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  withholdingGroupData: WithholdingGroupDatasType<T>[];
}
