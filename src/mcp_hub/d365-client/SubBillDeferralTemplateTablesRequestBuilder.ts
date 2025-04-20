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
import { SubBillDeferralTemplateTables } from './SubBillDeferralTemplateTables';

/**
 * Request builder class for operations supported on the {@link SubBillDeferralTemplateTables} entity.
 */
export class SubBillDeferralTemplateTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillDeferralTemplateTables<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillDeferralTemplateTables` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillDeferralTemplateTables` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillDeferralTemplateTables<T>, T> {
    return new GetAllRequestBuilder<SubBillDeferralTemplateTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillDeferralTemplateTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillDeferralTemplateTables`.
   */
  create(
    entity: SubBillDeferralTemplateTables<T>
  ): CreateRequestBuilder<SubBillDeferralTemplateTables<T>, T> {
    return new CreateRequestBuilder<SubBillDeferralTemplateTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillDeferralTemplateTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillDeferralTemplateTables.dataAreaId}.
   * @param template Key property. See {@link SubBillDeferralTemplateTables.template}.
   * @returns A request builder for creating requests to retrieve one `SubBillDeferralTemplateTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    template: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillDeferralTemplateTables<T>, T> {
    return new GetByKeyRequestBuilder<SubBillDeferralTemplateTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Template: template
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillDeferralTemplateTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillDeferralTemplateTables`.
   */
  update(
    entity: SubBillDeferralTemplateTables<T>
  ): UpdateRequestBuilder<SubBillDeferralTemplateTables<T>, T> {
    return new UpdateRequestBuilder<SubBillDeferralTemplateTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralTemplateTables`.
   * @param dataAreaId Key property. See {@link SubBillDeferralTemplateTables.dataAreaId}.
   * @param template Key property. See {@link SubBillDeferralTemplateTables.template}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralTemplateTables`.
   */
  delete(
    dataAreaId: string,
    template: string
  ): DeleteRequestBuilder<SubBillDeferralTemplateTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralTemplateTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralTemplateTables` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillDeferralTemplateTables<T>
  ): DeleteRequestBuilder<SubBillDeferralTemplateTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    template?: string
  ): DeleteRequestBuilder<SubBillDeferralTemplateTables<T>, T> {
    return new DeleteRequestBuilder<SubBillDeferralTemplateTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillDeferralTemplateTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Template: template!
          }
    );
  }
}
