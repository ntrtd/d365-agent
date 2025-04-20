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
import type { ProductReleaseProductDetailsApi } from './ProductReleaseProductDetailsApi';
import { NoYes } from './NoYes';
import { EngChgProductReleaseStatus } from './EngChgProductReleaseStatus';
import {
  ReceivedProductReleaseLines,
  ReceivedProductReleaseLinesType
} from './ReceivedProductReleaseLines';
import {
  EngineeringProductVersions,
  EngineeringProductVersionsType
} from './EngineeringProductVersions';
import {
  ChgSentProductReleaseLines,
  ChgSentProductReleaseLinesType
} from './ChgSentProductReleaseLines';
import {
  ReceivedProductReleaseLinesV2,
  ReceivedProductReleaseLinesV2Type
} from './ReceivedProductReleaseLinesV2';

/**
 * This class represents the entity "ProductReleaseProductDetails" of service "d365_metadata".
 */
export class ProductReleaseProductDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductReleaseProductDetailsType<T>
{
  /**
   * Technical entity name for ProductReleaseProductDetails.
   */
  static override _entityName = 'ProductReleaseProductDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductReleaseProductDetails entity.
   */
  static _keys = ['dataAreaId', 'ProductNumber', 'ProductVersionId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Version Id.
   */
  declare productVersionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Template Bom Id.
   * @nullable
   */
  declare templateBomId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Template Item Number.
   * @nullable
   */
  declare templateItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Product Release Copy Bill Of Materials Approval.
   * @nullable
   */
  declare willProductReleaseCopyBillOfMaterialsApproval?: NoYes | null;
  /**
   * Will Product Release Release Route.
   * @nullable
   */
  declare willProductReleaseReleaseRoute?: NoYes | null;
  /**
   * Template Route Id.
   * @nullable
   */
  declare templateRouteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Release Status.
   * @nullable
   */
  declare releaseStatus?: EngChgProductReleaseStatus | null;
  /**
   * Will Product Release Release Bill Of Materials.
   * @nullable
   */
  declare willProductReleaseReleaseBillOfMaterials?: NoYes | null;
  /**
   * Will Product Release Copy Route Approval.
   * @nullable
   */
  declare willProductReleaseCopyRouteApproval?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link ReceivedProductReleaseLines} entity.
   */
  declare receivedProductReleaseLines: ReceivedProductReleaseLines<T>[];
  /**
   * One-to-one navigation property to the {@link EngineeringProductVersions} entity.
   */
  declare engineeringProductVersion?: EngineeringProductVersions<T> | null;
  /**
   * One-to-many navigation property to the {@link ChgSentProductReleaseLines} entity.
   */
  declare sentProductReleaseLines: ChgSentProductReleaseLines<T>[];
  /**
   * One-to-many navigation property to the {@link ReceivedProductReleaseLinesV2} entity.
   */
  declare receivedProductReleaseLinesV2: ReceivedProductReleaseLinesV2<T>[];

  constructor(_entityApi: ProductReleaseProductDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductReleaseProductDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  productNumber: DeserializedType<T, 'Edm.String'>;
  productVersionId: DeserializedType<T, 'Edm.String'>;
  templateBomId?: DeserializedType<T, 'Edm.String'> | null;
  templateItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  willProductReleaseCopyBillOfMaterialsApproval?: NoYes | null;
  willProductReleaseReleaseRoute?: NoYes | null;
  templateRouteId?: DeserializedType<T, 'Edm.String'> | null;
  releaseStatus?: EngChgProductReleaseStatus | null;
  willProductReleaseReleaseBillOfMaterials?: NoYes | null;
  willProductReleaseCopyRouteApproval?: NoYes | null;
  receivedProductReleaseLines: ReceivedProductReleaseLinesType<T>[];
  engineeringProductVersion?: EngineeringProductVersionsType<T> | null;
  sentProductReleaseLines: ChgSentProductReleaseLinesType<T>[];
  receivedProductReleaseLinesV2: ReceivedProductReleaseLinesV2Type<T>[];
}
