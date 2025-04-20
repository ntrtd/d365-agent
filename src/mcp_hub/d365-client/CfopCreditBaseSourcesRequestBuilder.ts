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
import { CfopCreditBaseSources } from './CfopCreditBaseSources';
import { FbNonFiscalOpCreditSourceCodeBr } from './FbNonFiscalOpCreditSourceCodeBr';

/**
 * Request builder class for operations supported on the {@link CfopCreditBaseSources} entity.
 */
export class CfopCreditBaseSourcesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CfopCreditBaseSources<T>, T> {
  /**
   * Returns a request builder for querying all `CfopCreditBaseSources` entities.
   * @returns A request builder for creating requests to retrieve all `CfopCreditBaseSources` entities.
   */
  getAll(): GetAllRequestBuilder<CfopCreditBaseSources<T>, T> {
    return new GetAllRequestBuilder<CfopCreditBaseSources<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CfopCreditBaseSources` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CfopCreditBaseSources`.
   */
  create(
    entity: CfopCreditBaseSources<T>
  ): CreateRequestBuilder<CfopCreditBaseSources<T>, T> {
    return new CreateRequestBuilder<CfopCreditBaseSources<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CfopCreditBaseSources` entity based on its keys.
   * @param creditBaseSource Key property. See {@link CfopCreditBaseSources.creditBaseSource}.
   * @param cfop Key property. See {@link CfopCreditBaseSources.cfop}.
   * @returns A request builder for creating requests to retrieve one `CfopCreditBaseSources` entity based on its keys.
   */
  getByKey(
    creditBaseSource: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.FBNonFiscalOpCreditSourceCode_BR'
    >,
    cfop: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CfopCreditBaseSources<T>, T> {
    return new GetByKeyRequestBuilder<CfopCreditBaseSources<T>, T>(
      this.entityApi,
      {
        CreditBaseSource: creditBaseSource,
        CFOP: cfop
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CfopCreditBaseSources`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CfopCreditBaseSources`.
   */
  update(
    entity: CfopCreditBaseSources<T>
  ): UpdateRequestBuilder<CfopCreditBaseSources<T>, T> {
    return new UpdateRequestBuilder<CfopCreditBaseSources<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CfopCreditBaseSources`.
   * @param creditBaseSource Key property. See {@link CfopCreditBaseSources.creditBaseSource}.
   * @param cfop Key property. See {@link CfopCreditBaseSources.cfop}.
   * @returns A request builder for creating requests that delete an entity of type `CfopCreditBaseSources`.
   */
  delete(
    creditBaseSource: FbNonFiscalOpCreditSourceCodeBr,
    cfop: string
  ): DeleteRequestBuilder<CfopCreditBaseSources<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CfopCreditBaseSources`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CfopCreditBaseSources` by taking the entity as a parameter.
   */
  delete(
    entity: CfopCreditBaseSources<T>
  ): DeleteRequestBuilder<CfopCreditBaseSources<T>, T>;
  delete(
    creditBaseSourceOrEntity: any,
    cfop?: string
  ): DeleteRequestBuilder<CfopCreditBaseSources<T>, T> {
    return new DeleteRequestBuilder<CfopCreditBaseSources<T>, T>(
      this.entityApi,
      creditBaseSourceOrEntity instanceof CfopCreditBaseSources
        ? creditBaseSourceOrEntity
        : {
            CreditBaseSource: creditBaseSourceOrEntity!,
            CFOP: cfop!
          }
    );
  }
}
