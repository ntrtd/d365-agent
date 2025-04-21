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
import { LtmSalesTables } from './LtmSalesTables';

/**
 * Request builder class for operations supported on the {@link LtmSalesTables} entity.
 */
export class LtmSalesTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmSalesTables<T>, T> {
  /**
   * Returns a request builder for querying all `LtmSalesTables` entities.
   * @returns A request builder for creating requests to retrieve all `LtmSalesTables` entities.
   */
  getAll(): GetAllRequestBuilder<LtmSalesTables<T>, T> {
    return new GetAllRequestBuilder<LtmSalesTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LtmSalesTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmSalesTables`.
   */
  create(
    entity: LtmSalesTables<T>
  ): CreateRequestBuilder<LtmSalesTables<T>, T> {
    return new CreateRequestBuilder<LtmSalesTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmSalesTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmSalesTables.dataAreaId}.
   * @param salesId Key property. See {@link LtmSalesTables.salesId}.
   * @returns A request builder for creating requests to retrieve one `LtmSalesTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmSalesTables<T>, T> {
    return new GetByKeyRequestBuilder<LtmSalesTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      SalesId: salesId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LtmSalesTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmSalesTables`.
   */
  update(
    entity: LtmSalesTables<T>
  ): UpdateRequestBuilder<LtmSalesTables<T>, T> {
    return new UpdateRequestBuilder<LtmSalesTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmSalesTables`.
   * @param dataAreaId Key property. See {@link LtmSalesTables.dataAreaId}.
   * @param salesId Key property. See {@link LtmSalesTables.salesId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmSalesTables`.
   */
  delete(
    dataAreaId: string,
    salesId: string
  ): DeleteRequestBuilder<LtmSalesTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmSalesTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmSalesTables` by taking the entity as a parameter.
   */
  delete(entity: LtmSalesTables<T>): DeleteRequestBuilder<LtmSalesTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesId?: string
  ): DeleteRequestBuilder<LtmSalesTables<T>, T> {
    return new DeleteRequestBuilder<LtmSalesTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmSalesTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesId: salesId!
          }
    );
  }
}
