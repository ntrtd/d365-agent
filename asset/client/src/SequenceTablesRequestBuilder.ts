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
import { SequenceTables } from './SequenceTables';
import { NumberSequenceType } from './NumberSequenceType';

/**
 * Request builder class for operations supported on the {@link SequenceTables} entity.
 */
export class SequenceTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SequenceTables<T>, T> {
  /**
   * Returns a request builder for querying all `SequenceTables` entities.
   * @returns A request builder for creating requests to retrieve all `SequenceTables` entities.
   */
  getAll(): GetAllRequestBuilder<SequenceTables<T>, T> {
    return new GetAllRequestBuilder<SequenceTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SequenceTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SequenceTables`.
   */
  create(
    entity: SequenceTables<T>
  ): CreateRequestBuilder<SequenceTables<T>, T> {
    return new CreateRequestBuilder<SequenceTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SequenceTables` entity based on its keys.
   * @param numberSequenceCode Key property. See {@link SequenceTables.numberSequenceCode}.
   * @param scopeType Key property. See {@link SequenceTables.scopeType}.
   * @param scopeValue Key property. See {@link SequenceTables.scopeValue}.
   * @returns A request builder for creating requests to retrieve one `SequenceTables` entity based on its keys.
   */
  getByKey(
    numberSequenceCode: DeserializedType<T, 'Edm.String'>,
    scopeType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.NumberSequenceType'
    >,
    scopeValue: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SequenceTables<T>, T> {
    return new GetByKeyRequestBuilder<SequenceTables<T>, T>(this.entityApi, {
      NumberSequenceCode: numberSequenceCode,
      ScopeType: scopeType,
      ScopeValue: scopeValue
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SequenceTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SequenceTables`.
   */
  update(
    entity: SequenceTables<T>
  ): UpdateRequestBuilder<SequenceTables<T>, T> {
    return new UpdateRequestBuilder<SequenceTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SequenceTables`.
   * @param numberSequenceCode Key property. See {@link SequenceTables.numberSequenceCode}.
   * @param scopeType Key property. See {@link SequenceTables.scopeType}.
   * @param scopeValue Key property. See {@link SequenceTables.scopeValue}.
   * @returns A request builder for creating requests that delete an entity of type `SequenceTables`.
   */
  delete(
    numberSequenceCode: string,
    scopeType: NumberSequenceType,
    scopeValue: string
  ): DeleteRequestBuilder<SequenceTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SequenceTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SequenceTables` by taking the entity as a parameter.
   */
  delete(entity: SequenceTables<T>): DeleteRequestBuilder<SequenceTables<T>, T>;
  delete(
    numberSequenceCodeOrEntity: any,
    scopeType?: NumberSequenceType,
    scopeValue?: string
  ): DeleteRequestBuilder<SequenceTables<T>, T> {
    return new DeleteRequestBuilder<SequenceTables<T>, T>(
      this.entityApi,
      numberSequenceCodeOrEntity instanceof SequenceTables
        ? numberSequenceCodeOrEntity
        : {
            NumberSequenceCode: numberSequenceCodeOrEntity!,
            ScopeType: scopeType!,
            ScopeValue: scopeValue!
          }
    );
  }
}
