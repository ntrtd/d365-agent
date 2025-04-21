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
import type { IdentificationTypesApi } from './IdentificationTypesApi';
import { NoYes } from './NoYes';
import { HcmIdentificationNumberAllowedValues } from './HcmIdentificationNumberAllowedValues';
import {
  HumanResourcesParameters,
  HumanResourcesParametersType
} from './HumanResourcesParameters';
import {
  HumanResourcesSharedParameters,
  HumanResourcesSharedParametersType
} from './HumanResourcesSharedParameters';
import { I9DocumentTypes, I9DocumentTypesType } from './I9DocumentTypes';
import {
  PersonIdentificationNumbers,
  PersonIdentificationNumbersType
} from './PersonIdentificationNumbers';

/**
 * This class represents the entity "IdentificationTypes" of service "d365_metadata".
 */
export class IdentificationTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements IdentificationTypesType<T>
{
  /**
   * Technical entity name for IdentificationTypes.
   */
  static override _entityName = 'IdentificationTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IdentificationTypes entity.
   */
  static _keys = ['IdentificationTypeId'];
  /**
   * Identification Type Id.
   */
  declare identificationTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fixed Length.
   */
  declare fixedLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Identification Number Format.
   * @nullable
   */
  declare identificationNumberFormat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check Duplicates.
   * @nullable
   */
  declare checkDuplicates?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allowed Values.
   * @nullable
   */
  declare allowedValues?: HcmIdentificationNumberAllowedValues | null;
  /**
   * One-to-many navigation property to the {@link HumanResourcesParameters} entity.
   */
  declare humanResourcesParameters: HumanResourcesParameters<T>[];
  /**
   * One-to-many navigation property to the {@link HumanResourcesSharedParameters} entity.
   */
  declare personalIdentificationParameter: HumanResourcesSharedParameters<T>[];
  /**
   * One-to-many navigation property to the {@link HumanResourcesSharedParameters} entity.
   */
  declare socialSecurityNumberParameter: HumanResourcesSharedParameters<T>[];
  /**
   * One-to-many navigation property to the {@link HumanResourcesSharedParameters} entity.
   */
  declare alienIdentificationParameter: HumanResourcesSharedParameters<T>[];
  /**
   * One-to-many navigation property to the {@link HumanResourcesSharedParameters} entity.
   */
  declare nationalIdentificationParameter: HumanResourcesSharedParameters<T>[];
  /**
   * One-to-many navigation property to the {@link I9DocumentTypes} entity.
   */
  declare i9DocumentTypes: I9DocumentTypes<T>[];
  /**
   * One-to-many navigation property to the {@link PersonIdentificationNumbers} entity.
   */
  declare personIdentificationNumbers: PersonIdentificationNumbers<T>[];

  constructor(_entityApi: IdentificationTypesApi<T>) {
    super(_entityApi);
  }
}

export interface IdentificationTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  identificationTypeId: DeserializedType<T, 'Edm.String'>;
  fixedLength: DeserializedType<T, 'Edm.Int32'>;
  identificationNumberFormat?: DeserializedType<T, 'Edm.String'> | null;
  checkDuplicates?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  allowedValues?: HcmIdentificationNumberAllowedValues | null;
  humanResourcesParameters: HumanResourcesParametersType<T>[];
  personalIdentificationParameter: HumanResourcesSharedParametersType<T>[];
  socialSecurityNumberParameter: HumanResourcesSharedParametersType<T>[];
  alienIdentificationParameter: HumanResourcesSharedParametersType<T>[];
  nationalIdentificationParameter: HumanResourcesSharedParametersType<T>[];
  i9DocumentTypes: I9DocumentTypesType<T>[];
  personIdentificationNumbers: PersonIdentificationNumbersType<T>[];
}
