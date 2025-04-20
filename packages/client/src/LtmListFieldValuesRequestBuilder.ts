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
import { LtmListFieldValues } from './LtmListFieldValues';
import { LtmListFieldId } from './LtmListFieldId';

/**
 * Request builder class for operations supported on the {@link LtmListFieldValues} entity.
 */
export class LtmListFieldValuesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmListFieldValues<T>, T> {
  /**
   * Returns a request builder for querying all `LtmListFieldValues` entities.
   * @returns A request builder for creating requests to retrieve all `LtmListFieldValues` entities.
   */
  getAll(): GetAllRequestBuilder<LtmListFieldValues<T>, T> {
    return new GetAllRequestBuilder<LtmListFieldValues<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LtmListFieldValues` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmListFieldValues`.
   */
  create(
    entity: LtmListFieldValues<T>
  ): CreateRequestBuilder<LtmListFieldValues<T>, T> {
    return new CreateRequestBuilder<LtmListFieldValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmListFieldValues` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmListFieldValues.dataAreaId}.
   * @param listFieldCode Key property. See {@link LtmListFieldValues.listFieldCode}.
   * @param listFieldId Key property. See {@link LtmListFieldValues.listFieldId}.
   * @returns A request builder for creating requests to retrieve one `LtmListFieldValues` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    listFieldCode: DeserializedType<T, 'Edm.String'>,
    listFieldId: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LTMListFieldId'
    >
  ): GetByKeyRequestBuilder<LtmListFieldValues<T>, T> {
    return new GetByKeyRequestBuilder<LtmListFieldValues<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ListFieldCode: listFieldCode,
        ListFieldId: listFieldId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmListFieldValues`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmListFieldValues`.
   */
  update(
    entity: LtmListFieldValues<T>
  ): UpdateRequestBuilder<LtmListFieldValues<T>, T> {
    return new UpdateRequestBuilder<LtmListFieldValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmListFieldValues`.
   * @param dataAreaId Key property. See {@link LtmListFieldValues.dataAreaId}.
   * @param listFieldCode Key property. See {@link LtmListFieldValues.listFieldCode}.
   * @param listFieldId Key property. See {@link LtmListFieldValues.listFieldId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmListFieldValues`.
   */
  delete(
    dataAreaId: string,
    listFieldCode: string,
    listFieldId: LtmListFieldId
  ): DeleteRequestBuilder<LtmListFieldValues<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmListFieldValues`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmListFieldValues` by taking the entity as a parameter.
   */
  delete(
    entity: LtmListFieldValues<T>
  ): DeleteRequestBuilder<LtmListFieldValues<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    listFieldCode?: string,
    listFieldId?: LtmListFieldId
  ): DeleteRequestBuilder<LtmListFieldValues<T>, T> {
    return new DeleteRequestBuilder<LtmListFieldValues<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmListFieldValues
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ListFieldCode: listFieldCode!,
            ListFieldId: listFieldId!
          }
    );
  }
}
