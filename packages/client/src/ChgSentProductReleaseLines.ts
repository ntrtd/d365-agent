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
import type { ChgSentProductReleaseLinesApi } from './ChgSentProductReleaseLinesApi';
import { EngChgReleaseStatus } from './EngChgReleaseStatus';
import { NoYes } from './NoYes';
import { EngChgReleaseTreeNodeType } from './EngChgReleaseTreeNodeType';
import { PmfProductType } from './PmfProductType';
import {
  SentProductReleaseHeaders,
  SentProductReleaseHeadersType
} from './SentProductReleaseHeaders';
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
 * This class represents the entity "ChgSentProductReleaseLines" of service "d365_metadata".
 */
export class ChgSentProductReleaseLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ChgSentProductReleaseLinesType<T>
{
  /**
   * Technical entity name for ChgSentProductReleaseLines.
   */
  static override _entityName = 'ChgSentProductReleaseLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ChgSentProductReleaseLines entity.
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
   * Co By Product Line Creation Sequence Number.
   */
  declare coByProductLineCreationSequenceNumber: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Has Setup Errors.
   * @nullable
   */
  declare hasSetupErrors?: NoYes | null;
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
   * Line Product Version Id.
   * @nullable
   */
  declare lineProductVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bill Of Materials Line Creation Sequence Number.
   */
  declare billOfMaterialsLineCreationSequenceNumber: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Active Route Id.
   * @nullable
   */
  declare activeRouteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Co By Product Type.
   * @nullable
   */
  declare coByProductType?: PmfProductType | null;
  /**
   * Parent Line Number.
   */
  declare parentLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Active Bom Id.
   * @nullable
   */
  declare activeBomId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Product Number.
   * @nullable
   */
  declare lineProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Co By Product Item Number.
   * @nullable
   */
  declare coByProductItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link SentProductReleaseHeaders} entity.
   */
  declare sentProductReleaseHeader?: SentProductReleaseHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link BillOfMaterialsLinesV3} entity.
   */
  declare bomBillOfMaterialsHeader?: BillOfMaterialsLinesV3<T> | null;
  /**
   * One-to-one navigation property to the {@link RouteHeaders} entity.
   */
  declare routeHeader?: RouteHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link ChgSentProductReleaseLines} entity.
   */
  declare parentSentProductReleaseLine?: ChgSentProductReleaseLines<T> | null;
  /**
   * One-to-many navigation property to the {@link ChgSentProductReleaseLines} entity.
   */
  declare sentProductReleaseLines: ChgSentProductReleaseLines<T>[];
  /**
   * One-to-one navigation property to the {@link ProductReleaseProductDetails} entity.
   */
  declare productReleaseProductDetails?: ProductReleaseProductDetails<T> | null;

  constructor(_entityApi: ChgSentProductReleaseLinesApi<T>) {
    super(_entityApi);
  }
}

export interface ChgSentProductReleaseLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  headerProductNumber: DeserializedType<T, 'Edm.String'>;
  headerProductVersionId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  releasingLegalEntityId: DeserializedType<T, 'Edm.String'>;
  releaseStatus?: EngChgReleaseStatus | null;
  coByProductLineCreationSequenceNumber: DeserializedType<T, 'Edm.Decimal'>;
  hasSetupErrors?: NoYes | null;
  willProductReleaseIncludeLine?: NoYes | null;
  releaseTreeNodeType?: EngChgReleaseTreeNodeType | null;
  lineProductVersionId?: DeserializedType<T, 'Edm.String'> | null;
  billOfMaterialsLineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  activeRouteId?: DeserializedType<T, 'Edm.String'> | null;
  coByProductType?: PmfProductType | null;
  parentLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  activeBomId?: DeserializedType<T, 'Edm.String'> | null;
  lineProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  coByProductItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  sentProductReleaseHeader?: SentProductReleaseHeadersType<T> | null;
  bomBillOfMaterialsHeader?: BillOfMaterialsLinesV3Type<T> | null;
  routeHeader?: RouteHeadersType<T> | null;
  parentSentProductReleaseLine?: ChgSentProductReleaseLinesType<T> | null;
  sentProductReleaseLines: ChgSentProductReleaseLinesType<T>[];
  productReleaseProductDetails?: ProductReleaseProductDetailsType<T> | null;
}
