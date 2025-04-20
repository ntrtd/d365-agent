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
import { WithholdCountryRegionToRemittances } from './WithholdCountryRegionToRemittances';

/**
 * Request builder class for operations supported on the {@link WithholdCountryRegionToRemittances} entity.
 */
export class WithholdCountryRegionToRemittancesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WithholdCountryRegionToRemittances<T>, T> {
  /**
   * Returns a request builder for querying all `WithholdCountryRegionToRemittances` entities.
   * @returns A request builder for creating requests to retrieve all `WithholdCountryRegionToRemittances` entities.
   */
  getAll(): GetAllRequestBuilder<WithholdCountryRegionToRemittances<T>, T> {
    return new GetAllRequestBuilder<WithholdCountryRegionToRemittances<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WithholdCountryRegionToRemittances` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WithholdCountryRegionToRemittances`.
   */
  create(
    entity: WithholdCountryRegionToRemittances<T>
  ): CreateRequestBuilder<WithholdCountryRegionToRemittances<T>, T> {
    return new CreateRequestBuilder<WithholdCountryRegionToRemittances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WithholdCountryRegionToRemittances` entity based on its keys.
   * @param dataAreaId Key property. See {@link WithholdCountryRegionToRemittances.dataAreaId}.
   * @param countryCode Key property. See {@link WithholdCountryRegionToRemittances.countryCode}.
   * @returns A request builder for creating requests to retrieve one `WithholdCountryRegionToRemittances` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    countryCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WithholdCountryRegionToRemittances<T>, T> {
    return new GetByKeyRequestBuilder<WithholdCountryRegionToRemittances<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CountryCode: countryCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WithholdCountryRegionToRemittances`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WithholdCountryRegionToRemittances`.
   */
  update(
    entity: WithholdCountryRegionToRemittances<T>
  ): UpdateRequestBuilder<WithholdCountryRegionToRemittances<T>, T> {
    return new UpdateRequestBuilder<WithholdCountryRegionToRemittances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WithholdCountryRegionToRemittances`.
   * @param dataAreaId Key property. See {@link WithholdCountryRegionToRemittances.dataAreaId}.
   * @param countryCode Key property. See {@link WithholdCountryRegionToRemittances.countryCode}.
   * @returns A request builder for creating requests that delete an entity of type `WithholdCountryRegionToRemittances`.
   */
  delete(
    dataAreaId: string,
    countryCode: string
  ): DeleteRequestBuilder<WithholdCountryRegionToRemittances<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WithholdCountryRegionToRemittances`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WithholdCountryRegionToRemittances` by taking the entity as a parameter.
   */
  delete(
    entity: WithholdCountryRegionToRemittances<T>
  ): DeleteRequestBuilder<WithholdCountryRegionToRemittances<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    countryCode?: string
  ): DeleteRequestBuilder<WithholdCountryRegionToRemittances<T>, T> {
    return new DeleteRequestBuilder<WithholdCountryRegionToRemittances<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WithholdCountryRegionToRemittances
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CountryCode: countryCode!
          }
    );
  }
}
