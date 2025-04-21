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
import { LedgerTransRules } from './LedgerTransRules';

/**
 * Request builder class for operations supported on the {@link LedgerTransRules} entity.
 */
export class LedgerTransRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerTransRules<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerTransRules` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerTransRules` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerTransRules<T>, T> {
    return new GetAllRequestBuilder<LedgerTransRules<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LedgerTransRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerTransRules`.
   */
  create(
    entity: LedgerTransRules<T>
  ): CreateRequestBuilder<LedgerTransRules<T>, T> {
    return new CreateRequestBuilder<LedgerTransRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerTransRules` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerTransRules.dataAreaId}.
   * @param lineId Key property. See {@link LedgerTransRules.lineId}.
   * @returns A request builder for creating requests to retrieve one `LedgerTransRules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<LedgerTransRules<T>, T> {
    return new GetByKeyRequestBuilder<LedgerTransRules<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      LineId: lineId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerTransRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerTransRules`.
   */
  update(
    entity: LedgerTransRules<T>
  ): UpdateRequestBuilder<LedgerTransRules<T>, T> {
    return new UpdateRequestBuilder<LedgerTransRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerTransRules`.
   * @param dataAreaId Key property. See {@link LedgerTransRules.dataAreaId}.
   * @param lineId Key property. See {@link LedgerTransRules.lineId}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerTransRules`.
   */
  delete(
    dataAreaId: string,
    lineId: string
  ): DeleteRequestBuilder<LedgerTransRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerTransRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerTransRules` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerTransRules<T>
  ): DeleteRequestBuilder<LedgerTransRules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineId?: string
  ): DeleteRequestBuilder<LedgerTransRules<T>, T> {
    return new DeleteRequestBuilder<LedgerTransRules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerTransRules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineId: lineId!
          }
    );
  }
}
