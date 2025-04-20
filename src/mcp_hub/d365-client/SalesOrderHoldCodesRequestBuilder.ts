/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { SalesOrderHoldCodes } from './SalesOrderHoldCodes';

/**
 * Request builder class for operations supported on the {@link SalesOrderHoldCodes} entity.
 */
export class SalesOrderHoldCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderHoldCodes<T>, T> {
  /**
   * Returns a request builder for querying all `SalesOrderHoldCodes` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderHoldCodes` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderHoldCodes<T>, T> {
    return new GetAllRequestBuilder<SalesOrderHoldCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesOrderHoldCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderHoldCodes`.
   */
  create(
    entity: SalesOrderHoldCodes<T>
  ): CreateRequestBuilder<SalesOrderHoldCodes<T>, T> {
    return new CreateRequestBuilder<SalesOrderHoldCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesOrderHoldCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesOrderHoldCodes.dataAreaId}.
   * @param salesOrderHoldCode Key property. See {@link SalesOrderHoldCodes.salesOrderHoldCode}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderHoldCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesOrderHoldCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderHoldCodes<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderHoldCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesOrderHoldCode: salesOrderHoldCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderHoldCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderHoldCodes`.
   */
  update(
    entity: SalesOrderHoldCodes<T>
  ): UpdateRequestBuilder<SalesOrderHoldCodes<T>, T> {
    return new UpdateRequestBuilder<SalesOrderHoldCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderHoldCodes`.
   * @param dataAreaId Key property. See {@link SalesOrderHoldCodes.dataAreaId}.
   * @param salesOrderHoldCode Key property. See {@link SalesOrderHoldCodes.salesOrderHoldCode}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderHoldCodes`.
   */
  delete(
    dataAreaId: string,
    salesOrderHoldCode: string
  ): DeleteRequestBuilder<SalesOrderHoldCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderHoldCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderHoldCodes` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderHoldCodes<T>
  ): DeleteRequestBuilder<SalesOrderHoldCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesOrderHoldCode?: string
  ): DeleteRequestBuilder<SalesOrderHoldCodes<T>, T> {
    return new DeleteRequestBuilder<SalesOrderHoldCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesOrderHoldCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesOrderHoldCode: salesOrderHoldCode!
          }
    );
  }
}
