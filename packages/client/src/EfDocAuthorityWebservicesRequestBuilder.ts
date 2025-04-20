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
import { EfDocAuthorityWebservices } from './EfDocAuthorityWebservices';
import { EfDocWebServiceBr } from './EfDocWebServiceBr';
import { EfDocEnvironmentBr } from './EfDocEnvironmentBr';

/**
 * Request builder class for operations supported on the {@link EfDocAuthorityWebservices} entity.
 */
export class EfDocAuthorityWebservicesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EfDocAuthorityWebservices<T>, T> {
  /**
   * Returns a request builder for querying all `EfDocAuthorityWebservices` entities.
   * @returns A request builder for creating requests to retrieve all `EfDocAuthorityWebservices` entities.
   */
  getAll(): GetAllRequestBuilder<EfDocAuthorityWebservices<T>, T> {
    return new GetAllRequestBuilder<EfDocAuthorityWebservices<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EfDocAuthorityWebservices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EfDocAuthorityWebservices`.
   */
  create(
    entity: EfDocAuthorityWebservices<T>
  ): CreateRequestBuilder<EfDocAuthorityWebservices<T>, T> {
    return new CreateRequestBuilder<EfDocAuthorityWebservices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EfDocAuthorityWebservices` entity based on its keys.
   * @param webServiceType Key property. See {@link EfDocAuthorityWebservices.webServiceType}.
   * @param environmentType Key property. See {@link EfDocAuthorityWebservices.environmentType}.
   * @param version Key property. See {@link EfDocAuthorityWebservices.version}.
   * @param authority Key property. See {@link EfDocAuthorityWebservices.authority}.
   * @returns A request builder for creating requests to retrieve one `EfDocAuthorityWebservices` entity based on its keys.
   */
  getByKey(
    webServiceType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.EFDocWebService_BR'
    >,
    environmentType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.EFDocEnvironment_BR'
    >,
    version: DeserializedType<T, 'Edm.String'>,
    authority: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EfDocAuthorityWebservices<T>, T> {
    return new GetByKeyRequestBuilder<EfDocAuthorityWebservices<T>, T>(
      this.entityApi,
      {
        WebServiceType: webServiceType,
        EnvironmentType: environmentType,
        Version: version,
        Authority: authority
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EfDocAuthorityWebservices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EfDocAuthorityWebservices`.
   */
  update(
    entity: EfDocAuthorityWebservices<T>
  ): UpdateRequestBuilder<EfDocAuthorityWebservices<T>, T> {
    return new UpdateRequestBuilder<EfDocAuthorityWebservices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EfDocAuthorityWebservices`.
   * @param webServiceType Key property. See {@link EfDocAuthorityWebservices.webServiceType}.
   * @param environmentType Key property. See {@link EfDocAuthorityWebservices.environmentType}.
   * @param version Key property. See {@link EfDocAuthorityWebservices.version}.
   * @param authority Key property. See {@link EfDocAuthorityWebservices.authority}.
   * @returns A request builder for creating requests that delete an entity of type `EfDocAuthorityWebservices`.
   */
  delete(
    webServiceType: EfDocWebServiceBr,
    environmentType: EfDocEnvironmentBr,
    version: string,
    authority: string
  ): DeleteRequestBuilder<EfDocAuthorityWebservices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EfDocAuthorityWebservices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EfDocAuthorityWebservices` by taking the entity as a parameter.
   */
  delete(
    entity: EfDocAuthorityWebservices<T>
  ): DeleteRequestBuilder<EfDocAuthorityWebservices<T>, T>;
  delete(
    webServiceTypeOrEntity: any,
    environmentType?: EfDocEnvironmentBr,
    version?: string,
    authority?: string
  ): DeleteRequestBuilder<EfDocAuthorityWebservices<T>, T> {
    return new DeleteRequestBuilder<EfDocAuthorityWebservices<T>, T>(
      this.entityApi,
      webServiceTypeOrEntity instanceof EfDocAuthorityWebservices
        ? webServiceTypeOrEntity
        : {
            WebServiceType: webServiceTypeOrEntity!,
            EnvironmentType: environmentType!,
            Version: version!,
            Authority: authority!
          }
    );
  }
}
