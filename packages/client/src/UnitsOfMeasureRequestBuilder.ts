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
import { UnitsOfMeasure } from './UnitsOfMeasure';

/**
 * Request builder class for operations supported on the {@link UnitsOfMeasure} entity.
 */
export class UnitsOfMeasureRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UnitsOfMeasure<T>, T> {
  /**
   * Returns a request builder for querying all `UnitsOfMeasure` entities.
   * @returns A request builder for creating requests to retrieve all `UnitsOfMeasure` entities.
   */
  getAll(): GetAllRequestBuilder<UnitsOfMeasure<T>, T> {
    return new GetAllRequestBuilder<UnitsOfMeasure<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `UnitsOfMeasure` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UnitsOfMeasure`.
   */
  create(
    entity: UnitsOfMeasure<T>
  ): CreateRequestBuilder<UnitsOfMeasure<T>, T> {
    return new CreateRequestBuilder<UnitsOfMeasure<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `UnitsOfMeasure` entity based on its keys.
   * @param unitSymbol Key property. See {@link UnitsOfMeasure.unitSymbol}.
   * @returns A request builder for creating requests to retrieve one `UnitsOfMeasure` entity based on its keys.
   */
  getByKey(
    unitSymbol: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<UnitsOfMeasure<T>, T> {
    return new GetByKeyRequestBuilder<UnitsOfMeasure<T>, T>(this.entityApi, {
      UnitSymbol: unitSymbol
    });
  }

  /**
   * Returns a request builder for updating an entity of type `UnitsOfMeasure`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UnitsOfMeasure`.
   */
  update(
    entity: UnitsOfMeasure<T>
  ): UpdateRequestBuilder<UnitsOfMeasure<T>, T> {
    return new UpdateRequestBuilder<UnitsOfMeasure<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `UnitsOfMeasure`.
   * @param unitSymbol Key property. See {@link UnitsOfMeasure.unitSymbol}.
   * @returns A request builder for creating requests that delete an entity of type `UnitsOfMeasure`.
   */
  delete(unitSymbol: string): DeleteRequestBuilder<UnitsOfMeasure<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `UnitsOfMeasure`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UnitsOfMeasure` by taking the entity as a parameter.
   */
  delete(entity: UnitsOfMeasure<T>): DeleteRequestBuilder<UnitsOfMeasure<T>, T>;
  delete(unitSymbolOrEntity: any): DeleteRequestBuilder<UnitsOfMeasure<T>, T> {
    return new DeleteRequestBuilder<UnitsOfMeasure<T>, T>(
      this.entityApi,
      unitSymbolOrEntity instanceof UnitsOfMeasure
        ? unitSymbolOrEntity
        : { UnitSymbol: unitSymbolOrEntity! }
    );
  }
}
