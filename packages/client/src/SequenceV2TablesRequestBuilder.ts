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
import { SequenceV2Tables } from './SequenceV2Tables';
import { NumberSequenceType } from './NumberSequenceType';

/**
 * Request builder class for operations supported on the {@link SequenceV2Tables} entity.
 */
export class SequenceV2TablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SequenceV2Tables<T>, T> {
  /**
   * Returns a request builder for querying all `SequenceV2Tables` entities.
   * @returns A request builder for creating requests to retrieve all `SequenceV2Tables` entities.
   */
  getAll(): GetAllRequestBuilder<SequenceV2Tables<T>, T> {
    return new GetAllRequestBuilder<SequenceV2Tables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SequenceV2Tables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SequenceV2Tables`.
   */
  create(
    entity: SequenceV2Tables<T>
  ): CreateRequestBuilder<SequenceV2Tables<T>, T> {
    return new CreateRequestBuilder<SequenceV2Tables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SequenceV2Tables` entity based on its keys.
   * @param numberSequenceCode Key property. See {@link SequenceV2Tables.numberSequenceCode}.
   * @param scopeType Key property. See {@link SequenceV2Tables.scopeType}.
   * @param scopeValue Key property. See {@link SequenceV2Tables.scopeValue}.
   * @returns A request builder for creating requests to retrieve one `SequenceV2Tables` entity based on its keys.
   */
  getByKey(
    numberSequenceCode: DeserializedType<T, 'Edm.String'>,
    scopeType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.NumberSequenceType'
    >,
    scopeValue: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SequenceV2Tables<T>, T> {
    return new GetByKeyRequestBuilder<SequenceV2Tables<T>, T>(this.entityApi, {
      NumberSequenceCode: numberSequenceCode,
      ScopeType: scopeType,
      ScopeValue: scopeValue
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SequenceV2Tables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SequenceV2Tables`.
   */
  update(
    entity: SequenceV2Tables<T>
  ): UpdateRequestBuilder<SequenceV2Tables<T>, T> {
    return new UpdateRequestBuilder<SequenceV2Tables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SequenceV2Tables`.
   * @param numberSequenceCode Key property. See {@link SequenceV2Tables.numberSequenceCode}.
   * @param scopeType Key property. See {@link SequenceV2Tables.scopeType}.
   * @param scopeValue Key property. See {@link SequenceV2Tables.scopeValue}.
   * @returns A request builder for creating requests that delete an entity of type `SequenceV2Tables`.
   */
  delete(
    numberSequenceCode: string,
    scopeType: NumberSequenceType,
    scopeValue: string
  ): DeleteRequestBuilder<SequenceV2Tables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SequenceV2Tables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SequenceV2Tables` by taking the entity as a parameter.
   */
  delete(
    entity: SequenceV2Tables<T>
  ): DeleteRequestBuilder<SequenceV2Tables<T>, T>;
  delete(
    numberSequenceCodeOrEntity: any,
    scopeType?: NumberSequenceType,
    scopeValue?: string
  ): DeleteRequestBuilder<SequenceV2Tables<T>, T> {
    return new DeleteRequestBuilder<SequenceV2Tables<T>, T>(
      this.entityApi,
      numberSequenceCodeOrEntity instanceof SequenceV2Tables
        ? numberSequenceCodeOrEntity
        : {
            NumberSequenceCode: numberSequenceCodeOrEntity!,
            ScopeType: scopeType!,
            ScopeValue: scopeValue!
          }
    );
  }
}
