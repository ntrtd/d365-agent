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
import { WithholdRevenueTypes } from './WithholdRevenueTypes';

/**
 * Request builder class for operations supported on the {@link WithholdRevenueTypes} entity.
 */
export class WithholdRevenueTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WithholdRevenueTypes<T>, T> {
  /**
   * Returns a request builder for querying all `WithholdRevenueTypes` entities.
   * @returns A request builder for creating requests to retrieve all `WithholdRevenueTypes` entities.
   */
  getAll(): GetAllRequestBuilder<WithholdRevenueTypes<T>, T> {
    return new GetAllRequestBuilder<WithholdRevenueTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WithholdRevenueTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WithholdRevenueTypes`.
   */
  create(
    entity: WithholdRevenueTypes<T>
  ): CreateRequestBuilder<WithholdRevenueTypes<T>, T> {
    return new CreateRequestBuilder<WithholdRevenueTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WithholdRevenueTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link WithholdRevenueTypes.dataAreaId}.
   * @param taxWithholdRevenueCode Key property. See {@link WithholdRevenueTypes.taxWithholdRevenueCode}.
   * @returns A request builder for creating requests to retrieve one `WithholdRevenueTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxWithholdRevenueCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WithholdRevenueTypes<T>, T> {
    return new GetByKeyRequestBuilder<WithholdRevenueTypes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TaxWithholdRevenueCode: taxWithholdRevenueCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WithholdRevenueTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WithholdRevenueTypes`.
   */
  update(
    entity: WithholdRevenueTypes<T>
  ): UpdateRequestBuilder<WithholdRevenueTypes<T>, T> {
    return new UpdateRequestBuilder<WithholdRevenueTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WithholdRevenueTypes`.
   * @param dataAreaId Key property. See {@link WithholdRevenueTypes.dataAreaId}.
   * @param taxWithholdRevenueCode Key property. See {@link WithholdRevenueTypes.taxWithholdRevenueCode}.
   * @returns A request builder for creating requests that delete an entity of type `WithholdRevenueTypes`.
   */
  delete(
    dataAreaId: string,
    taxWithholdRevenueCode: string
  ): DeleteRequestBuilder<WithholdRevenueTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WithholdRevenueTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WithholdRevenueTypes` by taking the entity as a parameter.
   */
  delete(
    entity: WithholdRevenueTypes<T>
  ): DeleteRequestBuilder<WithholdRevenueTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxWithholdRevenueCode?: string
  ): DeleteRequestBuilder<WithholdRevenueTypes<T>, T> {
    return new DeleteRequestBuilder<WithholdRevenueTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WithholdRevenueTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxWithholdRevenueCode: taxWithholdRevenueCode!
          }
    );
  }
}
