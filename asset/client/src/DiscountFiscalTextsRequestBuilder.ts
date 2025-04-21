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
import { DiscountFiscalTexts } from './DiscountFiscalTexts';

/**
 * Request builder class for operations supported on the {@link DiscountFiscalTexts} entity.
 */
export class DiscountFiscalTextsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DiscountFiscalTexts<T>, T> {
  /**
   * Returns a request builder for querying all `DiscountFiscalTexts` entities.
   * @returns A request builder for creating requests to retrieve all `DiscountFiscalTexts` entities.
   */
  getAll(): GetAllRequestBuilder<DiscountFiscalTexts<T>, T> {
    return new GetAllRequestBuilder<DiscountFiscalTexts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DiscountFiscalTexts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DiscountFiscalTexts`.
   */
  create(
    entity: DiscountFiscalTexts<T>
  ): CreateRequestBuilder<DiscountFiscalTexts<T>, T> {
    return new CreateRequestBuilder<DiscountFiscalTexts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DiscountFiscalTexts` entity based on its keys.
   * @param dataAreaId Key property. See {@link DiscountFiscalTexts.dataAreaId}.
   * @param discount Key property. See {@link DiscountFiscalTexts.discount}.
   * @param connectorGroupNumber Key property. See {@link DiscountFiscalTexts.connectorGroupNumber}.
   * @returns A request builder for creating requests to retrieve one `DiscountFiscalTexts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    discount: DeserializedType<T, 'Edm.String'>,
    connectorGroupNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DiscountFiscalTexts<T>, T> {
    return new GetByKeyRequestBuilder<DiscountFiscalTexts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Discount: discount,
        ConnectorGroupNumber: connectorGroupNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DiscountFiscalTexts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DiscountFiscalTexts`.
   */
  update(
    entity: DiscountFiscalTexts<T>
  ): UpdateRequestBuilder<DiscountFiscalTexts<T>, T> {
    return new UpdateRequestBuilder<DiscountFiscalTexts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DiscountFiscalTexts`.
   * @param dataAreaId Key property. See {@link DiscountFiscalTexts.dataAreaId}.
   * @param discount Key property. See {@link DiscountFiscalTexts.discount}.
   * @param connectorGroupNumber Key property. See {@link DiscountFiscalTexts.connectorGroupNumber}.
   * @returns A request builder for creating requests that delete an entity of type `DiscountFiscalTexts`.
   */
  delete(
    dataAreaId: string,
    discount: string,
    connectorGroupNumber: string
  ): DeleteRequestBuilder<DiscountFiscalTexts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DiscountFiscalTexts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DiscountFiscalTexts` by taking the entity as a parameter.
   */
  delete(
    entity: DiscountFiscalTexts<T>
  ): DeleteRequestBuilder<DiscountFiscalTexts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    discount?: string,
    connectorGroupNumber?: string
  ): DeleteRequestBuilder<DiscountFiscalTexts<T>, T> {
    return new DeleteRequestBuilder<DiscountFiscalTexts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DiscountFiscalTexts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Discount: discount!,
            ConnectorGroupNumber: connectorGroupNumber!
          }
    );
  }
}
