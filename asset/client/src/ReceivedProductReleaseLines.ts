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
import type { ReceivedProductReleaseLinesApi } from './ReceivedProductReleaseLinesApi';
import { EngChgReleaseStatus } from './EngChgReleaseStatus';
import { PmfProductType } from './PmfProductType';
import { NoYes } from './NoYes';
import { EngChgReleaseTreeNodeType } from './EngChgReleaseTreeNodeType';
import {
  ReceivedProductReleaseHeaders,
  ReceivedProductReleaseHeadersType
} from './ReceivedProductReleaseHeaders';
import {
  BillOfMaterialsLinesV3,
  BillOfMaterialsLinesV3Type
} from './BillOfMaterialsLinesV3';
import { RouteHeaders, RouteHeadersType } from './RouteHeaders';
import {
  ProductReleaseProductDetails,
  ProductReleaseProductDetailsType
} from './ProductReleaseProductDetails';

/**
 * This class represents the entity "ReceivedProductReleaseLines" of service "d365_metadata".
 */
export class ReceivedProductReleaseLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReceivedProductReleaseLinesType<T>
{
  /**
   * Technical entity name for ReceivedProductReleaseLines.
   */
  static override _entityName = 'ReceivedProductReleaseLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReceivedProductReleaseLines entity.
   */
  static _keys = [
    'dataAreaId',
    'HeaderProductNumber',
    'HeaderProductVersionId',
    'LineNumber',
    'ReleasingLegalEntityId',
    'ReleaseStatus'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Header Product Number.
   */
  declare headerProductNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Header Product Version Id.
   */
  declare headerProductVersionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Releasing Legal Entity Id.
   */
  declare releasingLegalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Release Status.
   * @nullable
   */
  declare releaseStatus?: EngChgReleaseStatus | null;
  /**
   * Production Type.
   * @nullable
   */
  declare productionType?: PmfProductType | null;
  /**
   * Bill Of Materials Line Creation Sequence Number.
   */
  declare billOfMaterialsLineCreationSequenceNumber: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Co By Product Line Creation Sequence Number.
   */
  declare coByProductLineCreationSequenceNumber: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Co By Product Item Number.
   * @nullable
   */
  declare coByProductItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Product Version Id.
   * @nullable
   */
  declare lineProductVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Has Setup Errors.
   * @nullable
   */
  declare hasSetupErrors?: NoYes | null;
  /**
   * Line Product Number.
   * @nullable
   */
  declare lineProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Active Bom Id.
   * @nullable
   */
  declare activeBomId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Line Number.
   */
  declare parentLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Will Product Release Include Line.
   * @nullable
   */
  declare willProductReleaseIncludeLine?: NoYes | null;
  /**
   * Release Tree Node Type.
   * @nullable
   */
  declare releaseTreeNodeType?: EngChgReleaseTreeNodeType | null;
  /**
   * Is Batch Controlled.
   * @nullable
   */
  declare isBatchControlled?: NoYes | null;
  /**
   * Co By Product Type.
   * @nullable
   */
  declare coByProductType?: PmfProductType | null;
  /**
   * Active Route Id.
   * @nullable
   */
  declare activeRouteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ReceivedProductReleaseHeaders} entity.
   */
  declare receivedProductReleaseHeader?: ReceivedProductReleaseHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link BillOfMaterialsLinesV3} entity.
   */
  declare bomBillOfMaterialsHeader?: BillOfMaterialsLinesV3<T> | null;
  /**
   * One-to-one navigation property to the {@link RouteHeaders} entity.
   */
  declare routeHeader?: RouteHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductReleaseProductDetails} entity.
   */
  declare productReleaseProductDetails?: ProductReleaseProductDetails<T> | null;
  /**
   * One-to-one navigation property to the {@link ReceivedProductReleaseLines} entity.
   */
  declare parentReceivedProductReleaseLine?: ReceivedProductReleaseLines<T> | null;
  /**
   * One-to-many navigation property to the {@link ReceivedProductReleaseLines} entity.
   */
  declare receivedProductReleaseLines: ReceivedProductReleaseLines<T>[];

  constructor(_entityApi: ReceivedProductReleaseLinesApi<T>) {
    super(_entityApi);
  }
}

export interface ReceivedProductReleaseLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  headerProductNumber: DeserializedType<T, 'Edm.String'>;
  headerProductVersionId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  releasingLegalEntityId: DeserializedType<T, 'Edm.String'>;
  releaseStatus?: EngChgReleaseStatus | null;
  productionType?: PmfProductType | null;
  billOfMaterialsLineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  coByProductLineCreationSequenceNumber: DeserializedType<T, 'Edm.Decimal'>;
  coByProductItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  lineProductVersionId?: DeserializedType<T, 'Edm.String'> | null;
  hasSetupErrors?: NoYes | null;
  lineProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  activeBomId?: DeserializedType<T, 'Edm.String'> | null;
  parentLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  willProductReleaseIncludeLine?: NoYes | null;
  releaseTreeNodeType?: EngChgReleaseTreeNodeType | null;
  isBatchControlled?: NoYes | null;
  coByProductType?: PmfProductType | null;
  activeRouteId?: DeserializedType<T, 'Edm.String'> | null;
  receivedProductReleaseHeader?: ReceivedProductReleaseHeadersType<T> | null;
  bomBillOfMaterialsHeader?: BillOfMaterialsLinesV3Type<T> | null;
  routeHeader?: RouteHeadersType<T> | null;
  productReleaseProductDetails?: ProductReleaseProductDetailsType<T> | null;
  parentReceivedProductReleaseLine?: ReceivedProductReleaseLinesType<T> | null;
  receivedProductReleaseLines: ReceivedProductReleaseLinesType<T>[];
}
