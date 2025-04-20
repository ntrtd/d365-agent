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
import type { HazardousMaterialRegulationsApi } from './HazardousMaterialRegulationsApi';
import { HmimPrintCode } from './HmimPrintCode';
import { HmimPrintField } from './HmimPrintField';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "HazardousMaterialRegulations" of service "d365_metadata".
 */
export class HazardousMaterialRegulations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements HazardousMaterialRegulationsType<T>
{
  /**
   * Technical entity name for HazardousMaterialRegulations.
   */
  static override _entityName = 'HazardousMaterialRegulations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the HazardousMaterialRegulations entity.
   */
  static _keys = ['RegCode', 'SequenceNumber'];
  /**
   * Reg Code.
   */
  declare regCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Sequence Number.
   */
  declare sequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Print Code.
   * @nullable
   */
  declare printCode?: HmimPrintCode | null;
  /**
   * Print Before.
   * @nullable
   */
  declare printBefore?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Print Field.
   * @nullable
   */
  declare printField?: HmimPrintField | null;
  /**
   * Print After.
   * @nullable
   */
  declare printAfter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Print With Previous.
   * @nullable
   */
  declare printWithPrevious?: NoYes | null;

  constructor(_entityApi: HazardousMaterialRegulationsApi<T>) {
    super(_entityApi);
  }
}

export interface HazardousMaterialRegulationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  regCode: DeserializedType<T, 'Edm.String'>;
  sequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  printCode?: HmimPrintCode | null;
  printBefore?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  printField?: HmimPrintField | null;
  printAfter?: DeserializedType<T, 'Edm.String'> | null;
  printWithPrevious?: NoYes | null;
}
