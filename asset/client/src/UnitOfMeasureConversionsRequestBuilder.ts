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
import { UnitOfMeasureConversions } from './UnitOfMeasureConversions';

/**
 * Request builder class for operations supported on the {@link UnitOfMeasureConversions} entity.
 */
export class UnitOfMeasureConversionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UnitOfMeasureConversions<T>, T> {
  /**
   * Returns a request builder for querying all `UnitOfMeasureConversions` entities.
   * @returns A request builder for creating requests to retrieve all `UnitOfMeasureConversions` entities.
   */
  getAll(): GetAllRequestBuilder<UnitOfMeasureConversions<T>, T> {
    return new GetAllRequestBuilder<UnitOfMeasureConversions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `UnitOfMeasureConversions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UnitOfMeasureConversions`.
   */
  create(
    entity: UnitOfMeasureConversions<T>
  ): CreateRequestBuilder<UnitOfMeasureConversions<T>, T> {
    return new CreateRequestBuilder<UnitOfMeasureConversions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `UnitOfMeasureConversions` entity based on its keys.
   * @param fromUnitSymbol Key property. See {@link UnitOfMeasureConversions.fromUnitSymbol}.
   * @param toUnitSymbol Key property. See {@link UnitOfMeasureConversions.toUnitSymbol}.
   * @returns A request builder for creating requests to retrieve one `UnitOfMeasureConversions` entity based on its keys.
   */
  getByKey(
    fromUnitSymbol: DeserializedType<T, 'Edm.String'>,
    toUnitSymbol: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<UnitOfMeasureConversions<T>, T> {
    return new GetByKeyRequestBuilder<UnitOfMeasureConversions<T>, T>(
      this.entityApi,
      {
        FromUnitSymbol: fromUnitSymbol,
        ToUnitSymbol: toUnitSymbol
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `UnitOfMeasureConversions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UnitOfMeasureConversions`.
   */
  update(
    entity: UnitOfMeasureConversions<T>
  ): UpdateRequestBuilder<UnitOfMeasureConversions<T>, T> {
    return new UpdateRequestBuilder<UnitOfMeasureConversions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `UnitOfMeasureConversions`.
   * @param fromUnitSymbol Key property. See {@link UnitOfMeasureConversions.fromUnitSymbol}.
   * @param toUnitSymbol Key property. See {@link UnitOfMeasureConversions.toUnitSymbol}.
   * @returns A request builder for creating requests that delete an entity of type `UnitOfMeasureConversions`.
   */
  delete(
    fromUnitSymbol: string,
    toUnitSymbol: string
  ): DeleteRequestBuilder<UnitOfMeasureConversions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `UnitOfMeasureConversions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UnitOfMeasureConversions` by taking the entity as a parameter.
   */
  delete(
    entity: UnitOfMeasureConversions<T>
  ): DeleteRequestBuilder<UnitOfMeasureConversions<T>, T>;
  delete(
    fromUnitSymbolOrEntity: any,
    toUnitSymbol?: string
  ): DeleteRequestBuilder<UnitOfMeasureConversions<T>, T> {
    return new DeleteRequestBuilder<UnitOfMeasureConversions<T>, T>(
      this.entityApi,
      fromUnitSymbolOrEntity instanceof UnitOfMeasureConversions
        ? fromUnitSymbolOrEntity
        : {
            FromUnitSymbol: fromUnitSymbolOrEntity!,
            ToUnitSymbol: toUnitSymbol!
          }
    );
  }
}
