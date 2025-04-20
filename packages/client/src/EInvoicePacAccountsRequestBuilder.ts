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
import { EInvoicePacAccounts } from './EInvoicePacAccounts';
import { EInvoiceCfdiEnvironmentMx } from './EInvoiceCfdiEnvironmentMx';
import { EInvoiceCfdiWebServiceMx } from './EInvoiceCfdiWebServiceMx';

/**
 * Request builder class for operations supported on the {@link EInvoicePacAccounts} entity.
 */
export class EInvoicePacAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EInvoicePacAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `EInvoicePacAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `EInvoicePacAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<EInvoicePacAccounts<T>, T> {
    return new GetAllRequestBuilder<EInvoicePacAccounts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EInvoicePacAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EInvoicePacAccounts`.
   */
  create(
    entity: EInvoicePacAccounts<T>
  ): CreateRequestBuilder<EInvoicePacAccounts<T>, T> {
    return new CreateRequestBuilder<EInvoicePacAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EInvoicePacAccounts` entity based on its keys.
   * @param dataAreaId Key property. See {@link EInvoicePacAccounts.dataAreaId}.
   * @param pacAccountId Key property. See {@link EInvoicePacAccounts.pacAccountId}.
   * @param environment Key property. See {@link EInvoicePacAccounts.environment}.
   * @param webService Key property. See {@link EInvoicePacAccounts.webService}.
   * @returns A request builder for creating requests to retrieve one `EInvoicePacAccounts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    pacAccountId: DeserializedType<T, 'Edm.String'>,
    environment: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.EInvoiceCFDIEnvironment_MX'
    >,
    webService: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.EInvoiceCFDIWebService_MX'
    >
  ): GetByKeyRequestBuilder<EInvoicePacAccounts<T>, T> {
    return new GetByKeyRequestBuilder<EInvoicePacAccounts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PACAccountId: pacAccountId,
        Environment: environment,
        WebService: webService
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EInvoicePacAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EInvoicePacAccounts`.
   */
  update(
    entity: EInvoicePacAccounts<T>
  ): UpdateRequestBuilder<EInvoicePacAccounts<T>, T> {
    return new UpdateRequestBuilder<EInvoicePacAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EInvoicePacAccounts`.
   * @param dataAreaId Key property. See {@link EInvoicePacAccounts.dataAreaId}.
   * @param pacAccountId Key property. See {@link EInvoicePacAccounts.pacAccountId}.
   * @param environment Key property. See {@link EInvoicePacAccounts.environment}.
   * @param webService Key property. See {@link EInvoicePacAccounts.webService}.
   * @returns A request builder for creating requests that delete an entity of type `EInvoicePacAccounts`.
   */
  delete(
    dataAreaId: string,
    pacAccountId: string,
    environment: EInvoiceCfdiEnvironmentMx,
    webService: EInvoiceCfdiWebServiceMx
  ): DeleteRequestBuilder<EInvoicePacAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EInvoicePacAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EInvoicePacAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: EInvoicePacAccounts<T>
  ): DeleteRequestBuilder<EInvoicePacAccounts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    pacAccountId?: string,
    environment?: EInvoiceCfdiEnvironmentMx,
    webService?: EInvoiceCfdiWebServiceMx
  ): DeleteRequestBuilder<EInvoicePacAccounts<T>, T> {
    return new DeleteRequestBuilder<EInvoicePacAccounts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EInvoicePacAccounts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PACAccountId: pacAccountId!,
            Environment: environment!,
            WebService: webService!
          }
    );
  }
}
