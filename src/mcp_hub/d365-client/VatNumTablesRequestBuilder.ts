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
import { VatNumTables } from './VatNumTables';

/**
 * Request builder class for operations supported on the {@link VatNumTables} entity.
 */
export class VatNumTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VatNumTables<T>, T> {
  /**
   * Returns a request builder for querying all `VatNumTables` entities.
   * @returns A request builder for creating requests to retrieve all `VatNumTables` entities.
   */
  getAll(): GetAllRequestBuilder<VatNumTables<T>, T> {
    return new GetAllRequestBuilder<VatNumTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VatNumTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VatNumTables`.
   */
  create(entity: VatNumTables<T>): CreateRequestBuilder<VatNumTables<T>, T> {
    return new CreateRequestBuilder<VatNumTables<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `VatNumTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link VatNumTables.dataAreaId}.
   * @param vatNum Key property. See {@link VatNumTables.vatNum}.
   * @param countryRegionId Key property. See {@link VatNumTables.countryRegionId}.
   * @returns A request builder for creating requests to retrieve one `VatNumTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vatNum: DeserializedType<T, 'Edm.String'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VatNumTables<T>, T> {
    return new GetByKeyRequestBuilder<VatNumTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      VATNum: vatNum,
      CountryRegionId: countryRegionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `VatNumTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VatNumTables`.
   */
  update(entity: VatNumTables<T>): UpdateRequestBuilder<VatNumTables<T>, T> {
    return new UpdateRequestBuilder<VatNumTables<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `VatNumTables`.
   * @param dataAreaId Key property. See {@link VatNumTables.dataAreaId}.
   * @param vatNum Key property. See {@link VatNumTables.vatNum}.
   * @param countryRegionId Key property. See {@link VatNumTables.countryRegionId}.
   * @returns A request builder for creating requests that delete an entity of type `VatNumTables`.
   */
  delete(
    dataAreaId: string,
    vatNum: string,
    countryRegionId: string
  ): DeleteRequestBuilder<VatNumTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VatNumTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VatNumTables` by taking the entity as a parameter.
   */
  delete(entity: VatNumTables<T>): DeleteRequestBuilder<VatNumTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    vatNum?: string,
    countryRegionId?: string
  ): DeleteRequestBuilder<VatNumTables<T>, T> {
    return new DeleteRequestBuilder<VatNumTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VatNumTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VATNum: vatNum!,
            CountryRegionId: countryRegionId!
          }
    );
  }
}
