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
import type { NrTaxReportSetupsApi } from './NrTaxReportSetupsApi';
import { LvNrTaxFormNumber } from './LvNrTaxFormNumber';
import { LvNrTaxReportLineType } from './LvNrTaxReportLineType';

/**
 * This class represents the entity "NRTaxReportSetups" of service "d365_metadata".
 */
export class NrTaxReportSetups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements NrTaxReportSetupsType<T>
{
  /**
   * Technical entity name for NrTaxReportSetups.
   */
  static override _entityName = 'NRTaxReportSetups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the NrTaxReportSetups entity.
   */
  static _keys = ['dataAreaId', 'FormNumber', 'SequenceNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Form Number.
   * @nullable
   */
  declare formNumber?: LvNrTaxFormNumber | null;
  /**
   * Sequence Number.
   */
  declare sequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Id.
   * @nullable
   */
  declare warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pack Material Code.
   * @nullable
   */
  declare packMaterialCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Code.
   * @nullable
   */
  declare lineCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Type.
   * @nullable
   */
  declare lineType?: LvNrTaxReportLineType | null;
  /**
   * Total Line Code.
   * @nullable
   */
  declare totalLineCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Code.
   * @nullable
   */
  declare taxCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: NrTaxReportSetupsApi<T>) {
    super(_entityApi);
  }
}

export interface NrTaxReportSetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  formNumber?: LvNrTaxFormNumber | null;
  sequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  packMaterialCode?: DeserializedType<T, 'Edm.String'> | null;
  lineCode?: DeserializedType<T, 'Edm.String'> | null;
  lineType?: LvNrTaxReportLineType | null;
  totalLineCode?: DeserializedType<T, 'Edm.String'> | null;
  taxCode?: DeserializedType<T, 'Edm.String'> | null;
}
