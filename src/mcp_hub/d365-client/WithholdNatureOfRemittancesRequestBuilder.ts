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
import { WithholdNatureOfRemittances } from './WithholdNatureOfRemittances';

/**
 * Request builder class for operations supported on the {@link WithholdNatureOfRemittances} entity.
 */
export class WithholdNatureOfRemittancesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WithholdNatureOfRemittances<T>, T> {
  /**
   * Returns a request builder for querying all `WithholdNatureOfRemittances` entities.
   * @returns A request builder for creating requests to retrieve all `WithholdNatureOfRemittances` entities.
   */
  getAll(): GetAllRequestBuilder<WithholdNatureOfRemittances<T>, T> {
    return new GetAllRequestBuilder<WithholdNatureOfRemittances<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WithholdNatureOfRemittances` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WithholdNatureOfRemittances`.
   */
  create(
    entity: WithholdNatureOfRemittances<T>
  ): CreateRequestBuilder<WithholdNatureOfRemittances<T>, T> {
    return new CreateRequestBuilder<WithholdNatureOfRemittances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WithholdNatureOfRemittances` entity based on its keys.
   * @param dataAreaId Key property. See {@link WithholdNatureOfRemittances.dataAreaId}.
   * @param remittanceCategoryCode Key property. See {@link WithholdNatureOfRemittances.remittanceCategoryCode}.
   * @returns A request builder for creating requests to retrieve one `WithholdNatureOfRemittances` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    remittanceCategoryCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WithholdNatureOfRemittances<T>, T> {
    return new GetByKeyRequestBuilder<WithholdNatureOfRemittances<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RemittanceCategoryCode: remittanceCategoryCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WithholdNatureOfRemittances`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WithholdNatureOfRemittances`.
   */
  update(
    entity: WithholdNatureOfRemittances<T>
  ): UpdateRequestBuilder<WithholdNatureOfRemittances<T>, T> {
    return new UpdateRequestBuilder<WithholdNatureOfRemittances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WithholdNatureOfRemittances`.
   * @param dataAreaId Key property. See {@link WithholdNatureOfRemittances.dataAreaId}.
   * @param remittanceCategoryCode Key property. See {@link WithholdNatureOfRemittances.remittanceCategoryCode}.
   * @returns A request builder for creating requests that delete an entity of type `WithholdNatureOfRemittances`.
   */
  delete(
    dataAreaId: string,
    remittanceCategoryCode: string
  ): DeleteRequestBuilder<WithholdNatureOfRemittances<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WithholdNatureOfRemittances`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WithholdNatureOfRemittances` by taking the entity as a parameter.
   */
  delete(
    entity: WithholdNatureOfRemittances<T>
  ): DeleteRequestBuilder<WithholdNatureOfRemittances<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    remittanceCategoryCode?: string
  ): DeleteRequestBuilder<WithholdNatureOfRemittances<T>, T> {
    return new DeleteRequestBuilder<WithholdNatureOfRemittances<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WithholdNatureOfRemittances
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RemittanceCategoryCode: remittanceCategoryCode!
          }
    );
  }
}
