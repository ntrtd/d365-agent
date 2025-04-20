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
import { HsnCodes } from './HsnCodes';

/**
 * Request builder class for operations supported on the {@link HsnCodes} entity.
 */
export class HsnCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<HsnCodes<T>, T> {
  /**
   * Returns a request builder for querying all `HsnCodes` entities.
   * @returns A request builder for creating requests to retrieve all `HsnCodes` entities.
   */
  getAll(): GetAllRequestBuilder<HsnCodes<T>, T> {
    return new GetAllRequestBuilder<HsnCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `HsnCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HsnCodes`.
   */
  create(entity: HsnCodes<T>): CreateRequestBuilder<HsnCodes<T>, T> {
    return new CreateRequestBuilder<HsnCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `HsnCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link HsnCodes.dataAreaId}.
   * @param chapter Key property. See {@link HsnCodes.chapter}.
   * @param heading Key property. See {@link HsnCodes.heading}.
   * @param subheading Key property. See {@link HsnCodes.subheading}.
   * @param countryExtension Key property. See {@link HsnCodes.countryExtension}.
   * @param statisticalSuffix Key property. See {@link HsnCodes.statisticalSuffix}.
   * @returns A request builder for creating requests to retrieve one `HsnCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    chapter: DeserializedType<T, 'Edm.String'>,
    heading: DeserializedType<T, 'Edm.String'>,
    subheading: DeserializedType<T, 'Edm.String'>,
    countryExtension: DeserializedType<T, 'Edm.String'>,
    statisticalSuffix: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<HsnCodes<T>, T> {
    return new GetByKeyRequestBuilder<HsnCodes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Chapter: chapter,
      Heading: heading,
      Subheading: subheading,
      CountryExtension: countryExtension,
      StatisticalSuffix: statisticalSuffix
    });
  }

  /**
   * Returns a request builder for updating an entity of type `HsnCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `HsnCodes`.
   */
  update(entity: HsnCodes<T>): UpdateRequestBuilder<HsnCodes<T>, T> {
    return new UpdateRequestBuilder<HsnCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `HsnCodes`.
   * @param dataAreaId Key property. See {@link HsnCodes.dataAreaId}.
   * @param chapter Key property. See {@link HsnCodes.chapter}.
   * @param heading Key property. See {@link HsnCodes.heading}.
   * @param subheading Key property. See {@link HsnCodes.subheading}.
   * @param countryExtension Key property. See {@link HsnCodes.countryExtension}.
   * @param statisticalSuffix Key property. See {@link HsnCodes.statisticalSuffix}.
   * @returns A request builder for creating requests that delete an entity of type `HsnCodes`.
   */
  delete(
    dataAreaId: string,
    chapter: string,
    heading: string,
    subheading: string,
    countryExtension: string,
    statisticalSuffix: string
  ): DeleteRequestBuilder<HsnCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `HsnCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `HsnCodes` by taking the entity as a parameter.
   */
  delete(entity: HsnCodes<T>): DeleteRequestBuilder<HsnCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    chapter?: string,
    heading?: string,
    subheading?: string,
    countryExtension?: string,
    statisticalSuffix?: string
  ): DeleteRequestBuilder<HsnCodes<T>, T> {
    return new DeleteRequestBuilder<HsnCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof HsnCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Chapter: chapter!,
            Heading: heading!,
            Subheading: subheading!,
            CountryExtension: countryExtension!,
            StatisticalSuffix: statisticalSuffix!
          }
    );
  }
}
