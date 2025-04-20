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
import type { WithholdReportingCodesApi } from './WithholdReportingCodesApi';
import { TaxWithholdTypeIn } from './TaxWithholdTypeIn';
import { TaxWithholdReportingCodeIn } from './TaxWithholdReportingCodeIn';

/**
 * This class represents the entity "WithholdReportingCodes" of service "d365_metadata".
 */
export class WithholdReportingCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WithholdReportingCodesType<T>
{
  /**
   * Technical entity name for WithholdReportingCodes.
   */
  static override _entityName = 'WithholdReportingCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WithholdReportingCodes entity.
   */
  static _keys = [
    'dataAreaId',
    'TaxType',
    'WithholdingTaxComponent',
    'WithholdingTaxComponentGroup'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Type.
   * @nullable
   */
  declare taxType?: TaxWithholdTypeIn | null;
  /**
   * Withholding Tax Component.
   */
  declare withholdingTaxComponent: DeserializedType<T, 'Edm.String'>;
  /**
   * Withholding Tax Component Group.
   */
  declare withholdingTaxComponentGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Reporting Code.
   * @nullable
   */
  declare reportingCode?: TaxWithholdReportingCodeIn | null;
  /**
   * Component Group For Component.
   * @nullable
   */
  declare componentGroupForComponent?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: WithholdReportingCodesApi<T>) {
    super(_entityApi);
  }
}

export interface WithholdReportingCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxType?: TaxWithholdTypeIn | null;
  withholdingTaxComponent: DeserializedType<T, 'Edm.String'>;
  withholdingTaxComponentGroup: DeserializedType<T, 'Edm.String'>;
  reportingCode?: TaxWithholdReportingCodeIn | null;
  componentGroupForComponent?: DeserializedType<T, 'Edm.String'> | null;
}
