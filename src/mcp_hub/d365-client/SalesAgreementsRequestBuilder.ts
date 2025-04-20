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
import { SalesAgreements } from './SalesAgreements';

/**
 * Request builder class for operations supported on the {@link SalesAgreements} entity.
 */
export class SalesAgreementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesAgreements<T>, T> {
  /**
   * Returns a request builder for querying all `SalesAgreements` entities.
   * @returns A request builder for creating requests to retrieve all `SalesAgreements` entities.
   */
  getAll(): GetAllRequestBuilder<SalesAgreements<T>, T> {
    return new GetAllRequestBuilder<SalesAgreements<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesAgreements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesAgreements`.
   */
  create(
    entity: SalesAgreements<T>
  ): CreateRequestBuilder<SalesAgreements<T>, T> {
    return new CreateRequestBuilder<SalesAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesAgreements` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesAgreements.dataAreaId}.
   * @param salesAgreementId Key property. See {@link SalesAgreements.salesAgreementId}.
   * @returns A request builder for creating requests to retrieve one `SalesAgreements` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesAgreementId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesAgreements<T>, T> {
    return new GetByKeyRequestBuilder<SalesAgreements<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      SalesAgreementId: salesAgreementId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SalesAgreements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesAgreements`.
   */
  update(
    entity: SalesAgreements<T>
  ): UpdateRequestBuilder<SalesAgreements<T>, T> {
    return new UpdateRequestBuilder<SalesAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesAgreements`.
   * @param dataAreaId Key property. See {@link SalesAgreements.dataAreaId}.
   * @param salesAgreementId Key property. See {@link SalesAgreements.salesAgreementId}.
   * @returns A request builder for creating requests that delete an entity of type `SalesAgreements`.
   */
  delete(
    dataAreaId: string,
    salesAgreementId: string
  ): DeleteRequestBuilder<SalesAgreements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesAgreements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesAgreements` by taking the entity as a parameter.
   */
  delete(
    entity: SalesAgreements<T>
  ): DeleteRequestBuilder<SalesAgreements<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesAgreementId?: string
  ): DeleteRequestBuilder<SalesAgreements<T>, T> {
    return new DeleteRequestBuilder<SalesAgreements<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesAgreements
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesAgreementId: salesAgreementId!
          }
    );
  }
}
