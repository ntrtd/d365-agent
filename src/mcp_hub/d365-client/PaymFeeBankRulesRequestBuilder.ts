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
import { PaymFeeBankRules } from './PaymFeeBankRules';

/**
 * Request builder class for operations supported on the {@link PaymFeeBankRules} entity.
 */
export class PaymFeeBankRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PaymFeeBankRules<T>, T> {
  /**
   * Returns a request builder for querying all `PaymFeeBankRules` entities.
   * @returns A request builder for creating requests to retrieve all `PaymFeeBankRules` entities.
   */
  getAll(): GetAllRequestBuilder<PaymFeeBankRules<T>, T> {
    return new GetAllRequestBuilder<PaymFeeBankRules<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PaymFeeBankRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymFeeBankRules`.
   */
  create(
    entity: PaymFeeBankRules<T>
  ): CreateRequestBuilder<PaymFeeBankRules<T>, T> {
    return new CreateRequestBuilder<PaymFeeBankRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PaymFeeBankRules` entity based on its keys.
   * @param id Key property. See {@link PaymFeeBankRules.id}.
   * @param lineId Key property. See {@link PaymFeeBankRules.lineId}.
   * @returns A request builder for creating requests to retrieve one `PaymFeeBankRules` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>,
    lineId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<PaymFeeBankRules<T>, T> {
    return new GetByKeyRequestBuilder<PaymFeeBankRules<T>, T>(this.entityApi, {
      ID: id,
      LineId: lineId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PaymFeeBankRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymFeeBankRules`.
   */
  update(
    entity: PaymFeeBankRules<T>
  ): UpdateRequestBuilder<PaymFeeBankRules<T>, T> {
    return new UpdateRequestBuilder<PaymFeeBankRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymFeeBankRules`.
   * @param id Key property. See {@link PaymFeeBankRules.id}.
   * @param lineId Key property. See {@link PaymFeeBankRules.lineId}.
   * @returns A request builder for creating requests that delete an entity of type `PaymFeeBankRules`.
   */
  delete(
    id: string,
    lineId: string
  ): DeleteRequestBuilder<PaymFeeBankRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PaymFeeBankRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymFeeBankRules` by taking the entity as a parameter.
   */
  delete(
    entity: PaymFeeBankRules<T>
  ): DeleteRequestBuilder<PaymFeeBankRules<T>, T>;
  delete(
    idOrEntity: any,
    lineId?: string
  ): DeleteRequestBuilder<PaymFeeBankRules<T>, T> {
    return new DeleteRequestBuilder<PaymFeeBankRules<T>, T>(
      this.entityApi,
      idOrEntity instanceof PaymFeeBankRules
        ? idOrEntity
        : {
            ID: idOrEntity!,
            LineId: lineId!
          }
    );
  }
}
