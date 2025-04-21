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
import { LtmListFields } from './LtmListFields';
import { LtmListFieldId } from './LtmListFieldId';

/**
 * Request builder class for operations supported on the {@link LtmListFields} entity.
 */
export class LtmListFieldsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmListFields<T>, T> {
  /**
   * Returns a request builder for querying all `LtmListFields` entities.
   * @returns A request builder for creating requests to retrieve all `LtmListFields` entities.
   */
  getAll(): GetAllRequestBuilder<LtmListFields<T>, T> {
    return new GetAllRequestBuilder<LtmListFields<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LtmListFields` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmListFields`.
   */
  create(entity: LtmListFields<T>): CreateRequestBuilder<LtmListFields<T>, T> {
    return new CreateRequestBuilder<LtmListFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmListFields` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmListFields.dataAreaId}.
   * @param listFieldId Key property. See {@link LtmListFields.listFieldId}.
   * @returns A request builder for creating requests to retrieve one `LtmListFields` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    listFieldId: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LTMListFieldId'
    >
  ): GetByKeyRequestBuilder<LtmListFields<T>, T> {
    return new GetByKeyRequestBuilder<LtmListFields<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ListFieldId: listFieldId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LtmListFields`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmListFields`.
   */
  update(entity: LtmListFields<T>): UpdateRequestBuilder<LtmListFields<T>, T> {
    return new UpdateRequestBuilder<LtmListFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmListFields`.
   * @param dataAreaId Key property. See {@link LtmListFields.dataAreaId}.
   * @param listFieldId Key property. See {@link LtmListFields.listFieldId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmListFields`.
   */
  delete(
    dataAreaId: string,
    listFieldId: LtmListFieldId
  ): DeleteRequestBuilder<LtmListFields<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmListFields`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmListFields` by taking the entity as a parameter.
   */
  delete(entity: LtmListFields<T>): DeleteRequestBuilder<LtmListFields<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    listFieldId?: LtmListFieldId
  ): DeleteRequestBuilder<LtmListFields<T>, T> {
    return new DeleteRequestBuilder<LtmListFields<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmListFields
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ListFieldId: listFieldId!
          }
    );
  }
}
