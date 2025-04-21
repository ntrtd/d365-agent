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
import { ProductReadinessPolicyChecks } from './ProductReadinessPolicyChecks';
import { EngChgReadinessModule } from './EngChgReadinessModule';

/**
 * Request builder class for operations supported on the {@link ProductReadinessPolicyChecks} entity.
 */
export class ProductReadinessPolicyChecksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductReadinessPolicyChecks<T>, T> {
  /**
   * Returns a request builder for querying all `ProductReadinessPolicyChecks` entities.
   * @returns A request builder for creating requests to retrieve all `ProductReadinessPolicyChecks` entities.
   */
  getAll(): GetAllRequestBuilder<ProductReadinessPolicyChecks<T>, T> {
    return new GetAllRequestBuilder<ProductReadinessPolicyChecks<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductReadinessPolicyChecks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductReadinessPolicyChecks`.
   */
  create(
    entity: ProductReadinessPolicyChecks<T>
  ): CreateRequestBuilder<ProductReadinessPolicyChecks<T>, T> {
    return new CreateRequestBuilder<ProductReadinessPolicyChecks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductReadinessPolicyChecks` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductReadinessPolicyChecks.dataAreaId}.
   * @param productReadinessPolicyName Key property. See {@link ProductReadinessPolicyChecks.productReadinessPolicyName}.
   * @param checkName Key property. See {@link ProductReadinessPolicyChecks.checkName}.
   * @param legalEntityId Key property. See {@link ProductReadinessPolicyChecks.legalEntityId}.
   * @param processArea Key property. See {@link ProductReadinessPolicyChecks.processArea}.
   * @returns A request builder for creating requests to retrieve one `ProductReadinessPolicyChecks` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    productReadinessPolicyName: DeserializedType<T, 'Edm.String'>,
    checkName: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    processArea: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.EngChgReadinessModule'
    >
  ): GetByKeyRequestBuilder<ProductReadinessPolicyChecks<T>, T> {
    return new GetByKeyRequestBuilder<ProductReadinessPolicyChecks<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProductReadinessPolicyName: productReadinessPolicyName,
        CheckName: checkName,
        LegalEntityId: legalEntityId,
        ProcessArea: processArea
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductReadinessPolicyChecks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductReadinessPolicyChecks`.
   */
  update(
    entity: ProductReadinessPolicyChecks<T>
  ): UpdateRequestBuilder<ProductReadinessPolicyChecks<T>, T> {
    return new UpdateRequestBuilder<ProductReadinessPolicyChecks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductReadinessPolicyChecks`.
   * @param dataAreaId Key property. See {@link ProductReadinessPolicyChecks.dataAreaId}.
   * @param productReadinessPolicyName Key property. See {@link ProductReadinessPolicyChecks.productReadinessPolicyName}.
   * @param checkName Key property. See {@link ProductReadinessPolicyChecks.checkName}.
   * @param legalEntityId Key property. See {@link ProductReadinessPolicyChecks.legalEntityId}.
   * @param processArea Key property. See {@link ProductReadinessPolicyChecks.processArea}.
   * @returns A request builder for creating requests that delete an entity of type `ProductReadinessPolicyChecks`.
   */
  delete(
    dataAreaId: string,
    productReadinessPolicyName: string,
    checkName: string,
    legalEntityId: string,
    processArea: EngChgReadinessModule
  ): DeleteRequestBuilder<ProductReadinessPolicyChecks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductReadinessPolicyChecks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductReadinessPolicyChecks` by taking the entity as a parameter.
   */
  delete(
    entity: ProductReadinessPolicyChecks<T>
  ): DeleteRequestBuilder<ProductReadinessPolicyChecks<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    productReadinessPolicyName?: string,
    checkName?: string,
    legalEntityId?: string,
    processArea?: EngChgReadinessModule
  ): DeleteRequestBuilder<ProductReadinessPolicyChecks<T>, T> {
    return new DeleteRequestBuilder<ProductReadinessPolicyChecks<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductReadinessPolicyChecks
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProductReadinessPolicyName: productReadinessPolicyName!,
            CheckName: checkName!,
            LegalEntityId: legalEntityId!,
            ProcessArea: processArea!
          }
    );
  }
}
