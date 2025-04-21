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
import { SalesAgreementConfirmations } from './SalesAgreementConfirmations';

/**
 * Request builder class for operations supported on the {@link SalesAgreementConfirmations} entity.
 */
export class SalesAgreementConfirmationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesAgreementConfirmations<T>, T> {
  /**
   * Returns a request builder for querying all `SalesAgreementConfirmations` entities.
   * @returns A request builder for creating requests to retrieve all `SalesAgreementConfirmations` entities.
   */
  getAll(): GetAllRequestBuilder<SalesAgreementConfirmations<T>, T> {
    return new GetAllRequestBuilder<SalesAgreementConfirmations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesAgreementConfirmations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesAgreementConfirmations`.
   */
  create(
    entity: SalesAgreementConfirmations<T>
  ): CreateRequestBuilder<SalesAgreementConfirmations<T>, T> {
    return new CreateRequestBuilder<SalesAgreementConfirmations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesAgreementConfirmations` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesAgreementConfirmations.dataAreaId}.
   * @param salesAgreementId Key property. See {@link SalesAgreementConfirmations.salesAgreementId}.
   * @param confirmationNumber Key property. See {@link SalesAgreementConfirmations.confirmationNumber}.
   * @returns A request builder for creating requests to retrieve one `SalesAgreementConfirmations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesAgreementId: DeserializedType<T, 'Edm.String'>,
    confirmationNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesAgreementConfirmations<T>, T> {
    return new GetByKeyRequestBuilder<SalesAgreementConfirmations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesAgreementId: salesAgreementId,
        ConfirmationNumber: confirmationNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesAgreementConfirmations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesAgreementConfirmations`.
   */
  update(
    entity: SalesAgreementConfirmations<T>
  ): UpdateRequestBuilder<SalesAgreementConfirmations<T>, T> {
    return new UpdateRequestBuilder<SalesAgreementConfirmations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesAgreementConfirmations`.
   * @param dataAreaId Key property. See {@link SalesAgreementConfirmations.dataAreaId}.
   * @param salesAgreementId Key property. See {@link SalesAgreementConfirmations.salesAgreementId}.
   * @param confirmationNumber Key property. See {@link SalesAgreementConfirmations.confirmationNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SalesAgreementConfirmations`.
   */
  delete(
    dataAreaId: string,
    salesAgreementId: string,
    confirmationNumber: string
  ): DeleteRequestBuilder<SalesAgreementConfirmations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesAgreementConfirmations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesAgreementConfirmations` by taking the entity as a parameter.
   */
  delete(
    entity: SalesAgreementConfirmations<T>
  ): DeleteRequestBuilder<SalesAgreementConfirmations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesAgreementId?: string,
    confirmationNumber?: string
  ): DeleteRequestBuilder<SalesAgreementConfirmations<T>, T> {
    return new DeleteRequestBuilder<SalesAgreementConfirmations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesAgreementConfirmations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesAgreementId: salesAgreementId!,
            ConfirmationNumber: confirmationNumber!
          }
    );
  }
}
