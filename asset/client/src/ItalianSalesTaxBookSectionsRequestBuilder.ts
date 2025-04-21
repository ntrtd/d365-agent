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
import { ItalianSalesTaxBookSections } from './ItalianSalesTaxBookSections';

/**
 * Request builder class for operations supported on the {@link ItalianSalesTaxBookSections} entity.
 */
export class ItalianSalesTaxBookSectionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItalianSalesTaxBookSections<T>, T> {
  /**
   * Returns a request builder for querying all `ItalianSalesTaxBookSections` entities.
   * @returns A request builder for creating requests to retrieve all `ItalianSalesTaxBookSections` entities.
   */
  getAll(): GetAllRequestBuilder<ItalianSalesTaxBookSections<T>, T> {
    return new GetAllRequestBuilder<ItalianSalesTaxBookSections<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ItalianSalesTaxBookSections` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItalianSalesTaxBookSections`.
   */
  create(
    entity: ItalianSalesTaxBookSections<T>
  ): CreateRequestBuilder<ItalianSalesTaxBookSections<T>, T> {
    return new CreateRequestBuilder<ItalianSalesTaxBookSections<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ItalianSalesTaxBookSections` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItalianSalesTaxBookSections.dataAreaId}.
   * @param salesTaxBookSection Key property. See {@link ItalianSalesTaxBookSections.salesTaxBookSection}.
   * @returns A request builder for creating requests to retrieve one `ItalianSalesTaxBookSections` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesTaxBookSection: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ItalianSalesTaxBookSections<T>, T> {
    return new GetByKeyRequestBuilder<ItalianSalesTaxBookSections<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesTaxBookSection: salesTaxBookSection
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ItalianSalesTaxBookSections`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItalianSalesTaxBookSections`.
   */
  update(
    entity: ItalianSalesTaxBookSections<T>
  ): UpdateRequestBuilder<ItalianSalesTaxBookSections<T>, T> {
    return new UpdateRequestBuilder<ItalianSalesTaxBookSections<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ItalianSalesTaxBookSections`.
   * @param dataAreaId Key property. See {@link ItalianSalesTaxBookSections.dataAreaId}.
   * @param salesTaxBookSection Key property. See {@link ItalianSalesTaxBookSections.salesTaxBookSection}.
   * @returns A request builder for creating requests that delete an entity of type `ItalianSalesTaxBookSections`.
   */
  delete(
    dataAreaId: string,
    salesTaxBookSection: string
  ): DeleteRequestBuilder<ItalianSalesTaxBookSections<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItalianSalesTaxBookSections`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItalianSalesTaxBookSections` by taking the entity as a parameter.
   */
  delete(
    entity: ItalianSalesTaxBookSections<T>
  ): DeleteRequestBuilder<ItalianSalesTaxBookSections<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesTaxBookSection?: string
  ): DeleteRequestBuilder<ItalianSalesTaxBookSections<T>, T> {
    return new DeleteRequestBuilder<ItalianSalesTaxBookSections<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItalianSalesTaxBookSections
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesTaxBookSection: salesTaxBookSection!
          }
    );
  }
}
