/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { DeliveryModeProductLinesV2 } from './DeliveryModeProductLinesV2';
import { RetailDlvModeExcludeIncludeType } from './RetailDlvModeExcludeIncludeType';

/**
 * Request builder class for operations supported on the {@link DeliveryModeProductLinesV2} entity.
 */
export class DeliveryModeProductLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DeliveryModeProductLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `DeliveryModeProductLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `DeliveryModeProductLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<DeliveryModeProductLinesV2<T>, T> {
    return new GetAllRequestBuilder<DeliveryModeProductLinesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DeliveryModeProductLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DeliveryModeProductLinesV2`.
   */
  create(
    entity: DeliveryModeProductLinesV2<T>
  ): CreateRequestBuilder<DeliveryModeProductLinesV2<T>, T> {
    return new CreateRequestBuilder<DeliveryModeProductLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DeliveryModeProductLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link DeliveryModeProductLinesV2.dataAreaId}.
   * @param deliveryMode Key property. See {@link DeliveryModeProductLinesV2.deliveryMode}.
   * @param lineNumber Key property. See {@link DeliveryModeProductLinesV2.lineNumber}.
   * @param lineType Key property. See {@link DeliveryModeProductLinesV2.lineType}.
   * @returns A request builder for creating requests to retrieve one `DeliveryModeProductLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    deliveryMode: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    lineType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailDlvModeExcludeIncludeType'
    >
  ): GetByKeyRequestBuilder<DeliveryModeProductLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<DeliveryModeProductLinesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DeliveryMode: deliveryMode,
        LineNumber: lineNumber,
        LineType: lineType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DeliveryModeProductLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DeliveryModeProductLinesV2`.
   */
  update(
    entity: DeliveryModeProductLinesV2<T>
  ): UpdateRequestBuilder<DeliveryModeProductLinesV2<T>, T> {
    return new UpdateRequestBuilder<DeliveryModeProductLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DeliveryModeProductLinesV2`.
   * @param dataAreaId Key property. See {@link DeliveryModeProductLinesV2.dataAreaId}.
   * @param deliveryMode Key property. See {@link DeliveryModeProductLinesV2.deliveryMode}.
   * @param lineNumber Key property. See {@link DeliveryModeProductLinesV2.lineNumber}.
   * @param lineType Key property. See {@link DeliveryModeProductLinesV2.lineType}.
   * @returns A request builder for creating requests that delete an entity of type `DeliveryModeProductLinesV2`.
   */
  delete(
    dataAreaId: string,
    deliveryMode: string,
    lineNumber: BigNumber,
    lineType: RetailDlvModeExcludeIncludeType
  ): DeleteRequestBuilder<DeliveryModeProductLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DeliveryModeProductLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DeliveryModeProductLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: DeliveryModeProductLinesV2<T>
  ): DeleteRequestBuilder<DeliveryModeProductLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    deliveryMode?: string,
    lineNumber?: BigNumber,
    lineType?: RetailDlvModeExcludeIncludeType
  ): DeleteRequestBuilder<DeliveryModeProductLinesV2<T>, T> {
    return new DeleteRequestBuilder<DeliveryModeProductLinesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DeliveryModeProductLinesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DeliveryMode: deliveryMode!,
            LineNumber: lineNumber!,
            LineType: lineType!
          }
    );
  }
}
