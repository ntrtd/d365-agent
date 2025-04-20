/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApplicationBookmarks } from './ApplicationBookmarks';
import { ApplicationBookmarksRequestBuilder } from './ApplicationBookmarksRequestBuilder';
import { HrmApplicationCorrespondanceAction } from './HrmApplicationCorrespondanceAction';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  EdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class ApplicationBookmarksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ApplicationBookmarks<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): ApplicationBookmarksApi<DeSerializersT> {
    return new ApplicationBookmarksApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ApplicationBookmarks;

  requestBuilder(): ApplicationBookmarksRequestBuilder<DeSerializersT> {
    return new ApplicationBookmarksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ApplicationBookmarks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ApplicationBookmarks<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ApplicationBookmarks<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ApplicationBookmarks,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ApplicationBookmarks,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ApplicationBookmarks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CORRESPONDENCE_ACTION: EnumField<
      ApplicationBookmarks<DeSerializers>,
      DeSerializersT,
      HrmApplicationCorrespondanceAction,
      true,
      true
    >;
    BOOKMARKS: EdmTypeField<
      ApplicationBookmarks<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ApplicationBookmarks<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link correspondenceAction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRESPONDENCE_ACTION: fieldBuilder.buildEnumField(
          'CorrespondenceAction',
          HrmApplicationCorrespondanceAction,
          true
        ),
        /**
         * Static representation of the {@link bookmarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOOKMARKS: fieldBuilder.buildEdmTypeField(
          'Bookmarks',
          'Edm.Binary',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ApplicationBookmarks)
      };
    }

    return this._schema;
  }
}
