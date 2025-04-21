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
import type { DirParametersApi } from './DirParametersApi';
import { NoYes } from './NoYes';
import { DirPartyBaseType } from './DirPartyBaseType';

/**
 * This class represents the entity "DirParameters" of service "d365_metadata".
 */
export class DirParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DirParametersType<T>
{
  /**
   * Technical entity name for DirParameters.
   */
  static override _entityName = 'DirParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DirParameters entity.
   */
  static _keys = ['Key'];
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name Sequence.
   * @nullable
   */
  declare nameSequence?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Duns Display On Address.
   * @nullable
   */
  declare dunsDisplayOnAddress?: NoYes | null;
  /**
   * Default Party Type.
   * @nullable
   */
  declare defaultPartyType?: DirPartyBaseType | null;
  /**
   * Enable Edit For Externally Maintained Fields.
   * @nullable
   */
  declare enableEditForExternallyMaintainedFields?: NoYes | null;
  /**
   * Delete Parties With No Role.
   * @nullable
   */
  declare deletePartiesWithNoRole?: NoYes | null;
  /**
   * Use Duplicate Check.
   * @nullable
   */
  declare useDuplicateCheck?: NoYes | null;
  /**
   * Duns Check Unique.
   * @nullable
   */
  declare dunsCheckUnique?: NoYes | null;
  /**
   * Enable System Relationships.
   * @nullable
   */
  declare enableSystemRelationships?: NoYes | null;
  /**
   * Enable Email Address Field Validation.
   * @nullable
   */
  declare enableEmailAddressFieldValidation?: NoYes | null;

  constructor(_entityApi: DirParametersApi<T>) {
    super(_entityApi);
  }
}

export interface DirParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  key: DeserializedType<T, 'Edm.Int32'>;
  nameSequence?: DeserializedType<T, 'Edm.String'> | null;
  dunsDisplayOnAddress?: NoYes | null;
  defaultPartyType?: DirPartyBaseType | null;
  enableEditForExternallyMaintainedFields?: NoYes | null;
  deletePartiesWithNoRole?: NoYes | null;
  useDuplicateCheck?: NoYes | null;
  dunsCheckUnique?: NoYes | null;
  enableSystemRelationships?: NoYes | null;
  enableEmailAddressFieldValidation?: NoYes | null;
}
