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
import type { AbsenceCodesApi } from './AbsenceCodesApi';
import { JmgAbsenceMethodEnum } from './JmgAbsenceMethodEnum';
import { NoYes } from './NoYes';
import { AbsenceReasons, AbsenceReasonsType } from './AbsenceReasons';
import { AbsenceCodeGroups, AbsenceCodeGroupsType } from './AbsenceCodeGroups';

/**
 * This class represents the entity "AbsenceCodes" of service "d365_metadata".
 */
export class AbsenceCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AbsenceCodesType<T>
{
  /**
   * Technical entity name for AbsenceCodes.
   */
  static override _entityName = 'AbsenceCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AbsenceCodes entity.
   */
  static _keys = ['dataAreaId', 'AbsenceCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Absence Code.
   */
  declare absenceCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Text Color.
   */
  declare textColor: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Background Color.
   */
  declare backgroundColor: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Absence Group.
   * @nullable
   */
  declare absenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Account Display Value.
   * @nullable
   */
  declare mainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column.
   */
  declare column: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Pay Type.
   * @nullable
   */
  declare payType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Method.
   * @nullable
   */
  declare method?: JmgAbsenceMethodEnum | null;
  /**
   * Include In Report.
   * @nullable
   */
  declare includeInReport?: NoYes | null;
  /**
   * Icon.
   */
  declare icon: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Offset Account Display Value.
   * @nullable
   */
  declare offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Letter Code.
   * @nullable
   */
  declare letterCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Continue Absence.
   * @nullable
   */
  declare continueAbsence?: NoYes | null;
  /**
   * Days.
   */
  declare days: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-many navigation property to the {@link AbsenceReasons} entity.
   */
  declare absenceReason: AbsenceReasons<T>[];
  /**
   * One-to-one navigation property to the {@link AbsenceCodeGroups} entity.
   */
  declare absenceGroups?: AbsenceCodeGroups<T> | null;

  constructor(_entityApi: AbsenceCodesApi<T>) {
    super(_entityApi);
  }
}

export interface AbsenceCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  absenceCode: DeserializedType<T, 'Edm.String'>;
  textColor: DeserializedType<T, 'Edm.Int32'>;
  backgroundColor: DeserializedType<T, 'Edm.Int32'>;
  absenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  mainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  column: DeserializedType<T, 'Edm.Int32'>;
  payType?: DeserializedType<T, 'Edm.String'> | null;
  method?: JmgAbsenceMethodEnum | null;
  includeInReport?: NoYes | null;
  icon: DeserializedType<T, 'Edm.Int32'>;
  offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  letterCode?: DeserializedType<T, 'Edm.String'> | null;
  jobIdentification?: DeserializedType<T, 'Edm.String'> | null;
  registration?: NoYes | null;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  continueAbsence?: NoYes | null;
  days: DeserializedType<T, 'Edm.Decimal'>;
  absenceReason: AbsenceReasonsType<T>[];
  absenceGroups?: AbsenceCodeGroupsType<T> | null;
}
