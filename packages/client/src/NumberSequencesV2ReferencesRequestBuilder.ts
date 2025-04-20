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
import { NumberSequencesV2References } from './NumberSequencesV2References';
import { NumberSequenceType } from './NumberSequenceType';

/**
 * Request builder class for operations supported on the {@link NumberSequencesV2References} entity.
 */
export class NumberSequencesV2ReferencesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<NumberSequencesV2References<T>, T> {
  /**
   * Returns a request builder for querying all `NumberSequencesV2References` entities.
   * @returns A request builder for creating requests to retrieve all `NumberSequencesV2References` entities.
   */
  getAll(): GetAllRequestBuilder<NumberSequencesV2References<T>, T> {
    return new GetAllRequestBuilder<NumberSequencesV2References<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `NumberSequencesV2References` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `NumberSequencesV2References`.
   */
  create(
    entity: NumberSequencesV2References<T>
  ): CreateRequestBuilder<NumberSequencesV2References<T>, T> {
    return new CreateRequestBuilder<NumberSequencesV2References<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `NumberSequencesV2References` entity based on its keys.
   * @param scopeType Key property. See {@link NumberSequencesV2References.scopeType}.
   * @param scopeValue Key property. See {@link NumberSequencesV2References.scopeValue}.
   * @param dataTypeName Key property. See {@link NumberSequencesV2References.dataTypeName}.
   * @returns A request builder for creating requests to retrieve one `NumberSequencesV2References` entity based on its keys.
   */
  getByKey(
    scopeType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.NumberSequenceType'
    >,
    scopeValue: DeserializedType<T, 'Edm.String'>,
    dataTypeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<NumberSequencesV2References<T>, T> {
    return new GetByKeyRequestBuilder<NumberSequencesV2References<T>, T>(
      this.entityApi,
      {
        ScopeType: scopeType,
        ScopeValue: scopeValue,
        DataTypeName: dataTypeName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `NumberSequencesV2References`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `NumberSequencesV2References`.
   */
  update(
    entity: NumberSequencesV2References<T>
  ): UpdateRequestBuilder<NumberSequencesV2References<T>, T> {
    return new UpdateRequestBuilder<NumberSequencesV2References<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `NumberSequencesV2References`.
   * @param scopeType Key property. See {@link NumberSequencesV2References.scopeType}.
   * @param scopeValue Key property. See {@link NumberSequencesV2References.scopeValue}.
   * @param dataTypeName Key property. See {@link NumberSequencesV2References.dataTypeName}.
   * @returns A request builder for creating requests that delete an entity of type `NumberSequencesV2References`.
   */
  delete(
    scopeType: NumberSequenceType,
    scopeValue: string,
    dataTypeName: string
  ): DeleteRequestBuilder<NumberSequencesV2References<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `NumberSequencesV2References`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `NumberSequencesV2References` by taking the entity as a parameter.
   */
  delete(
    entity: NumberSequencesV2References<T>
  ): DeleteRequestBuilder<NumberSequencesV2References<T>, T>;
  delete(
    scopeTypeOrEntity: any,
    scopeValue?: string,
    dataTypeName?: string
  ): DeleteRequestBuilder<NumberSequencesV2References<T>, T> {
    return new DeleteRequestBuilder<NumberSequencesV2References<T>, T>(
      this.entityApi,
      scopeTypeOrEntity instanceof NumberSequencesV2References
        ? scopeTypeOrEntity
        : {
            ScopeType: scopeTypeOrEntity!,
            ScopeValue: scopeValue!,
            DataTypeName: dataTypeName!
          }
    );
  }
}
