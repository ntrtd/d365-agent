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
import type { AbsenceCodeGroupsApi } from './AbsenceCodeGroupsApi';
import { NoYes } from './NoYes';
import { AbsenceCodes, AbsenceCodesType } from './AbsenceCodes';

/**
 * This class represents the entity "AbsenceCodeGroups" of service "d365_metadata".
 */
export class AbsenceCodeGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AbsenceCodeGroupsType<T>
{
  /**
   * Technical entity name for AbsenceCodeGroups.
   */
  static override _entityName = 'AbsenceCodeGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AbsenceCodeGroups entity.
   */
  static _keys = ['dataAreaId', 'AbsenceGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Absence Group.
   */
  declare absenceGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Icon.
   */
  declare icon: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Deduct Overtime.
   * @nullable
   */
  declare deductOvertime?: NoYes | null;
  /**
   * Job Identification.
   * @nullable
   */
  declare jobIdentification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Registration.
   * @nullable
   */
  declare registration?: NoYes | null;
  /**
   * Reduce Flex.
   * @nullable
   */
  declare reduceFlex?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link AbsenceCodes} entity.
   */
  declare absenceCode: AbsenceCodes<T>[];

  constructor(_entityApi: AbsenceCodeGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface AbsenceCodeGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  absenceGroup: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  icon: DeserializedType<T, 'Edm.Int32'>;
  deductOvertime?: NoYes | null;
  jobIdentification?: DeserializedType<T, 'Edm.String'> | null;
  registration?: NoYes | null;
  reduceFlex?: NoYes | null;
  absenceCode: AbsenceCodesType<T>[];
}
