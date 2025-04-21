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
import { ConsignmentReplenishmentOrderHeaders } from './ConsignmentReplenishmentOrderHeaders';

/**
 * Request builder class for operations supported on the {@link ConsignmentReplenishmentOrderHeaders} entity.
 */
export class ConsignmentReplenishmentOrderHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ConsignmentReplenishmentOrderHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `ConsignmentReplenishmentOrderHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `ConsignmentReplenishmentOrderHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<ConsignmentReplenishmentOrderHeaders<T>, T> {
    return new GetAllRequestBuilder<ConsignmentReplenishmentOrderHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ConsignmentReplenishmentOrderHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ConsignmentReplenishmentOrderHeaders`.
   */
  create(
    entity: ConsignmentReplenishmentOrderHeaders<T>
  ): CreateRequestBuilder<ConsignmentReplenishmentOrderHeaders<T>, T> {
    return new CreateRequestBuilder<ConsignmentReplenishmentOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ConsignmentReplenishmentOrderHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link ConsignmentReplenishmentOrderHeaders.dataAreaId}.
   * @param consignmentReplenishmentOrderNumber Key property. See {@link ConsignmentReplenishmentOrderHeaders.consignmentReplenishmentOrderNumber}.
   * @returns A request builder for creating requests to retrieve one `ConsignmentReplenishmentOrderHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    consignmentReplenishmentOrderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ConsignmentReplenishmentOrderHeaders<T>, T> {
    return new GetByKeyRequestBuilder<
      ConsignmentReplenishmentOrderHeaders<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ConsignmentReplenishmentOrderNumber: consignmentReplenishmentOrderNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ConsignmentReplenishmentOrderHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ConsignmentReplenishmentOrderHeaders`.
   */
  update(
    entity: ConsignmentReplenishmentOrderHeaders<T>
  ): UpdateRequestBuilder<ConsignmentReplenishmentOrderHeaders<T>, T> {
    return new UpdateRequestBuilder<ConsignmentReplenishmentOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ConsignmentReplenishmentOrderHeaders`.
   * @param dataAreaId Key property. See {@link ConsignmentReplenishmentOrderHeaders.dataAreaId}.
   * @param consignmentReplenishmentOrderNumber Key property. See {@link ConsignmentReplenishmentOrderHeaders.consignmentReplenishmentOrderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ConsignmentReplenishmentOrderHeaders`.
   */
  delete(
    dataAreaId: string,
    consignmentReplenishmentOrderNumber: string
  ): DeleteRequestBuilder<ConsignmentReplenishmentOrderHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ConsignmentReplenishmentOrderHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ConsignmentReplenishmentOrderHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: ConsignmentReplenishmentOrderHeaders<T>
  ): DeleteRequestBuilder<ConsignmentReplenishmentOrderHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    consignmentReplenishmentOrderNumber?: string
  ): DeleteRequestBuilder<ConsignmentReplenishmentOrderHeaders<T>, T> {
    return new DeleteRequestBuilder<ConsignmentReplenishmentOrderHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ConsignmentReplenishmentOrderHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ConsignmentReplenishmentOrderNumber:
              consignmentReplenishmentOrderNumber!
          }
    );
  }
}
