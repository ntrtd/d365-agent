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
import { TaxCommunications } from './TaxCommunications';

/**
 * Request builder class for operations supported on the {@link TaxCommunications} entity.
 */
export class TaxCommunicationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxCommunications<T>, T> {
  /**
   * Returns a request builder for querying all `TaxCommunications` entities.
   * @returns A request builder for creating requests to retrieve all `TaxCommunications` entities.
   */
  getAll(): GetAllRequestBuilder<TaxCommunications<T>, T> {
    return new GetAllRequestBuilder<TaxCommunications<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxCommunications` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxCommunications`.
   */
  create(
    entity: TaxCommunications<T>
  ): CreateRequestBuilder<TaxCommunications<T>, T> {
    return new CreateRequestBuilder<TaxCommunications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxCommunications` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxCommunications.dataAreaId}.
   * @param years Key property. See {@link TaxCommunications.years}.
   * @param atecofinCode Key property. See {@link TaxCommunications.atecofinCode}.
   * @returns A request builder for creating requests to retrieve one `TaxCommunications` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    years: DeserializedType<T, 'Edm.Int32'>,
    atecofinCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxCommunications<T>, T> {
    return new GetByKeyRequestBuilder<TaxCommunications<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Years: years,
      ATECOFINCode: atecofinCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TaxCommunications`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxCommunications`.
   */
  update(
    entity: TaxCommunications<T>
  ): UpdateRequestBuilder<TaxCommunications<T>, T> {
    return new UpdateRequestBuilder<TaxCommunications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxCommunications`.
   * @param dataAreaId Key property. See {@link TaxCommunications.dataAreaId}.
   * @param years Key property. See {@link TaxCommunications.years}.
   * @param atecofinCode Key property. See {@link TaxCommunications.atecofinCode}.
   * @returns A request builder for creating requests that delete an entity of type `TaxCommunications`.
   */
  delete(
    dataAreaId: string,
    years: number,
    atecofinCode: string
  ): DeleteRequestBuilder<TaxCommunications<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxCommunications`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxCommunications` by taking the entity as a parameter.
   */
  delete(
    entity: TaxCommunications<T>
  ): DeleteRequestBuilder<TaxCommunications<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    years?: number,
    atecofinCode?: string
  ): DeleteRequestBuilder<TaxCommunications<T>, T> {
    return new DeleteRequestBuilder<TaxCommunications<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxCommunications
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Years: years!,
            ATECOFINCode: atecofinCode!
          }
    );
  }
}
