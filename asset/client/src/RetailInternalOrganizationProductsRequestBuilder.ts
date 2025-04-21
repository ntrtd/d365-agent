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
import { RetailInternalOrganizationProducts } from './RetailInternalOrganizationProducts';

/**
 * Request builder class for operations supported on the {@link RetailInternalOrganizationProducts} entity.
 */
export class RetailInternalOrganizationProductsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailInternalOrganizationProducts<T>, T> {
  /**
   * Returns a request builder for querying all `RetailInternalOrganizationProducts` entities.
   * @returns A request builder for creating requests to retrieve all `RetailInternalOrganizationProducts` entities.
   */
  getAll(): GetAllRequestBuilder<RetailInternalOrganizationProducts<T>, T> {
    return new GetAllRequestBuilder<RetailInternalOrganizationProducts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailInternalOrganizationProducts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailInternalOrganizationProducts`.
   */
  create(
    entity: RetailInternalOrganizationProducts<T>
  ): CreateRequestBuilder<RetailInternalOrganizationProducts<T>, T> {
    return new CreateRequestBuilder<RetailInternalOrganizationProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailInternalOrganizationProducts` entity based on its keys.
   * @param partyNumber Key property. See {@link RetailInternalOrganizationProducts.partyNumber}.
   * @param displayProductNumber Key property. See {@link RetailInternalOrganizationProducts.displayProductNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailInternalOrganizationProducts` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>,
    displayProductNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailInternalOrganizationProducts<T>, T> {
    return new GetByKeyRequestBuilder<RetailInternalOrganizationProducts<T>, T>(
      this.entityApi,
      {
        PartyNumber: partyNumber,
        DisplayProductNumber: displayProductNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailInternalOrganizationProducts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailInternalOrganizationProducts`.
   */
  update(
    entity: RetailInternalOrganizationProducts<T>
  ): UpdateRequestBuilder<RetailInternalOrganizationProducts<T>, T> {
    return new UpdateRequestBuilder<RetailInternalOrganizationProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailInternalOrganizationProducts`.
   * @param partyNumber Key property. See {@link RetailInternalOrganizationProducts.partyNumber}.
   * @param displayProductNumber Key property. See {@link RetailInternalOrganizationProducts.displayProductNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailInternalOrganizationProducts`.
   */
  delete(
    partyNumber: string,
    displayProductNumber: string
  ): DeleteRequestBuilder<RetailInternalOrganizationProducts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailInternalOrganizationProducts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailInternalOrganizationProducts` by taking the entity as a parameter.
   */
  delete(
    entity: RetailInternalOrganizationProducts<T>
  ): DeleteRequestBuilder<RetailInternalOrganizationProducts<T>, T>;
  delete(
    partyNumberOrEntity: any,
    displayProductNumber?: string
  ): DeleteRequestBuilder<RetailInternalOrganizationProducts<T>, T> {
    return new DeleteRequestBuilder<RetailInternalOrganizationProducts<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof RetailInternalOrganizationProducts
        ? partyNumberOrEntity
        : {
            PartyNumber: partyNumberOrEntity!,
            DisplayProductNumber: displayProductNumber!
          }
    );
  }
}
