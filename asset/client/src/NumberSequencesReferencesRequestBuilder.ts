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
import { NumberSequencesReferences } from './NumberSequencesReferences';
import { NumberSequenceType } from './NumberSequenceType';

/**
 * Request builder class for operations supported on the {@link NumberSequencesReferences} entity.
 */
export class NumberSequencesReferencesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<NumberSequencesReferences<T>, T> {
  /**
   * Returns a request builder for querying all `NumberSequencesReferences` entities.
   * @returns A request builder for creating requests to retrieve all `NumberSequencesReferences` entities.
   */
  getAll(): GetAllRequestBuilder<NumberSequencesReferences<T>, T> {
    return new GetAllRequestBuilder<NumberSequencesReferences<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `NumberSequencesReferences` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `NumberSequencesReferences`.
   */
  create(
    entity: NumberSequencesReferences<T>
  ): CreateRequestBuilder<NumberSequencesReferences<T>, T> {
    return new CreateRequestBuilder<NumberSequencesReferences<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `NumberSequencesReferences` entity based on its keys.
   * @param scopeType Key property. See {@link NumberSequencesReferences.scopeType}.
   * @param scopeValue Key property. See {@link NumberSequencesReferences.scopeValue}.
   * @param dataTypeName Key property. See {@link NumberSequencesReferences.dataTypeName}.
   * @returns A request builder for creating requests to retrieve one `NumberSequencesReferences` entity based on its keys.
   */
  getByKey(
    scopeType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.NumberSequenceType'
    >,
    scopeValue: DeserializedType<T, 'Edm.String'>,
    dataTypeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<NumberSequencesReferences<T>, T> {
    return new GetByKeyRequestBuilder<NumberSequencesReferences<T>, T>(
      this.entityApi,
      {
        ScopeType: scopeType,
        ScopeValue: scopeValue,
        DataTypeName: dataTypeName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `NumberSequencesReferences`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `NumberSequencesReferences`.
   */
  update(
    entity: NumberSequencesReferences<T>
  ): UpdateRequestBuilder<NumberSequencesReferences<T>, T> {
    return new UpdateRequestBuilder<NumberSequencesReferences<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `NumberSequencesReferences`.
   * @param scopeType Key property. See {@link NumberSequencesReferences.scopeType}.
   * @param scopeValue Key property. See {@link NumberSequencesReferences.scopeValue}.
   * @param dataTypeName Key property. See {@link NumberSequencesReferences.dataTypeName}.
   * @returns A request builder for creating requests that delete an entity of type `NumberSequencesReferences`.
   */
  delete(
    scopeType: NumberSequenceType,
    scopeValue: string,
    dataTypeName: string
  ): DeleteRequestBuilder<NumberSequencesReferences<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `NumberSequencesReferences`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `NumberSequencesReferences` by taking the entity as a parameter.
   */
  delete(
    entity: NumberSequencesReferences<T>
  ): DeleteRequestBuilder<NumberSequencesReferences<T>, T>;
  delete(
    scopeTypeOrEntity: any,
    scopeValue?: string,
    dataTypeName?: string
  ): DeleteRequestBuilder<NumberSequencesReferences<T>, T> {
    return new DeleteRequestBuilder<NumberSequencesReferences<T>, T>(
      this.entityApi,
      scopeTypeOrEntity instanceof NumberSequencesReferences
        ? scopeTypeOrEntity
        : {
            ScopeType: scopeTypeOrEntity!,
            ScopeValue: scopeValue!,
            DataTypeName: dataTypeName!
          }
    );
  }
}
