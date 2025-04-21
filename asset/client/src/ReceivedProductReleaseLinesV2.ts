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
import type { ReceivedProductReleaseLinesV2Api } from './ReceivedProductReleaseLinesV2Api';
import { EngChgReleaseStatus } from './EngChgReleaseStatus';
import { PmfProductType } from './PmfProductType';
import { NoYes } from './NoYes';
import { EngChgReleaseTreeNodeType } from './EngChgReleaseTreeNodeType';
import {
  ReceivedProductReleaseHeaders,
  ReceivedProductReleaseHeadersType
} from './ReceivedProductReleaseHeaders';
import {
  ProductReleaseProductDetails,
  ProductReleaseProductDetailsType
} from './ProductReleaseProductDetails';

/**
 * This class represents the entity "ReceivedProductReleaseLinesV2" of service "d365_metadata".
 */
export class ReceivedProductReleaseLinesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReceivedProductReleaseLinesV2Type<T>
{
  /**
   * Technical entity name for ReceivedProductReleaseLinesV2.
   */
  static override _entityName = 'ReceivedProductReleaseLinesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReceivedProductReleaseLinesV2 entity.
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
   * One-to-one navigation property to the {@link ProductReleaseProductDetails} entity.
   */
  declare productReleaseProductDetails?: ProductReleaseProductDetails<T> | null;
  /**
   * One-to-one navigation property to the {@link ReceivedProductReleaseLinesV2} entity.
   */
  declare parentReceivedProductReleaseLine?: ReceivedProductReleaseLinesV2<T> | null;
  /**
   * One-to-many navigation property to the {@link ReceivedProductReleaseLinesV2} entity.
   */
  declare receivedProductReleaseLinesV2: ReceivedProductReleaseLinesV2<T>[];

  constructor(_entityApi: ReceivedProductReleaseLinesV2Api<T>) {
    super(_entityApi);
  }
}

export interface ReceivedProductReleaseLinesV2Type<
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
  coByProductType?: PmfProductType | null;
  activeRouteId?: DeserializedType<T, 'Edm.String'> | null;
  receivedProductReleaseHeader?: ReceivedProductReleaseHeadersType<T> | null;
  productReleaseProductDetails?: ProductReleaseProductDetailsType<T> | null;
  parentReceivedProductReleaseLine?: ReceivedProductReleaseLinesV2Type<T> | null;
  receivedProductReleaseLinesV2: ReceivedProductReleaseLinesV2Type<T>[];
}
