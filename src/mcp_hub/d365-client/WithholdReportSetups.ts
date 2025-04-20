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
import type { WithholdReportSetupsApi } from './WithholdReportSetupsApi';
import { TaxWithholdVendorTypeTh } from './TaxWithholdVendorTypeTh';
import { TaxWithholdReportLayoutTh } from './TaxWithholdReportLayoutTh';

/**
 * This class represents the entity "WithholdReportSetups" of service "d365_metadata".
 */
export class WithholdReportSetups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WithholdReportSetupsType<T>
{
  /**
   * Technical entity name for WithholdReportSetups.
   */
  static override _entityName = 'WithholdReportSetups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WithholdReportSetups entity.
   */
  static _keys = [
    'dataAreaId',
    'TaxWithholdVendorType_TH',
    'TaxWithholdItemGroupHeading_TH',
    'TaxWithholdReportLayout_TH'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Withhold Vendor Type Th.
   * @nullable
   */
  declare taxWithholdVendorTypeTh?: TaxWithholdVendorTypeTh | null;
  /**
   * Tax Withhold Item Group Heading Th.
   */
  declare taxWithholdItemGroupHeadingTh: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Withhold Report Layout Th.
   * @nullable
   */
  declare taxWithholdReportLayoutTh?: TaxWithholdReportLayoutTh | null;

  constructor(_entityApi: WithholdReportSetupsApi<T>) {
    super(_entityApi);
  }
}

export interface WithholdReportSetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxWithholdVendorTypeTh?: TaxWithholdVendorTypeTh | null;
  taxWithholdItemGroupHeadingTh: DeserializedType<T, 'Edm.String'>;
  taxWithholdReportLayoutTh?: TaxWithholdReportLayoutTh | null;
}
