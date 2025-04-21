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
import { TaxRegistrationGroups } from './TaxRegistrationGroups';
import { TaxTypeRegistrationGroupIn } from './TaxTypeRegistrationGroupIn';

/**
 * Request builder class for operations supported on the {@link TaxRegistrationGroups} entity.
 */
export class TaxRegistrationGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxRegistrationGroups<T>, T> {
  /**
   * Returns a request builder for querying all `TaxRegistrationGroups` entities.
   * @returns A request builder for creating requests to retrieve all `TaxRegistrationGroups` entities.
   */
  getAll(): GetAllRequestBuilder<TaxRegistrationGroups<T>, T> {
    return new GetAllRequestBuilder<TaxRegistrationGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TaxRegistrationGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxRegistrationGroups`.
   */
  create(
    entity: TaxRegistrationGroups<T>
  ): CreateRequestBuilder<TaxRegistrationGroups<T>, T> {
    return new CreateRequestBuilder<TaxRegistrationGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxRegistrationGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxRegistrationGroups.dataAreaId}.
   * @param taxRegistrationGroup Key property. See {@link TaxRegistrationGroups.taxRegistrationGroup}.
   * @param taxType Key property. See {@link TaxRegistrationGroups.taxType}.
   * @returns A request builder for creating requests to retrieve one `TaxRegistrationGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxRegistrationGroup: DeserializedType<T, 'Edm.String'>,
    taxType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TaxTypeRegistrationGroup_IN'
    >
  ): GetByKeyRequestBuilder<TaxRegistrationGroups<T>, T> {
    return new GetByKeyRequestBuilder<TaxRegistrationGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TaxRegistrationGroup: taxRegistrationGroup,
        TaxType: taxType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxRegistrationGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxRegistrationGroups`.
   */
  update(
    entity: TaxRegistrationGroups<T>
  ): UpdateRequestBuilder<TaxRegistrationGroups<T>, T> {
    return new UpdateRequestBuilder<TaxRegistrationGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxRegistrationGroups`.
   * @param dataAreaId Key property. See {@link TaxRegistrationGroups.dataAreaId}.
   * @param taxRegistrationGroup Key property. See {@link TaxRegistrationGroups.taxRegistrationGroup}.
   * @param taxType Key property. See {@link TaxRegistrationGroups.taxType}.
   * @returns A request builder for creating requests that delete an entity of type `TaxRegistrationGroups`.
   */
  delete(
    dataAreaId: string,
    taxRegistrationGroup: string,
    taxType: TaxTypeRegistrationGroupIn
  ): DeleteRequestBuilder<TaxRegistrationGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxRegistrationGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxRegistrationGroups` by taking the entity as a parameter.
   */
  delete(
    entity: TaxRegistrationGroups<T>
  ): DeleteRequestBuilder<TaxRegistrationGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxRegistrationGroup?: string,
    taxType?: TaxTypeRegistrationGroupIn
  ): DeleteRequestBuilder<TaxRegistrationGroups<T>, T> {
    return new DeleteRequestBuilder<TaxRegistrationGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxRegistrationGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxRegistrationGroup: taxRegistrationGroup!,
            TaxType: taxType!
          }
    );
  }
}
